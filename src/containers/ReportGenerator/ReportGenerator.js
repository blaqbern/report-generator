import React from 'react'
import { connect } from 'react-redux'
import { fetchFolders } from '../../redux/modules/folders'
import PendingFolders from '../../components/PendingFolders/PendingFolders'
import RecentlyCompleted from '../../components/RecentlyCompleted/RecentlyCompleted'
import ReportPreview from '../../components/ReportPreview/ReportPreview'
import Spinner from '../../components/Spinner/Spinner'

function ReportGenerator({
  fetchingFolders,
  pendingFolders,
  recentlyCompleted,
  currentReport,
  handleFetchClick,
  fetchError,
}) {
  return (
    <div>
      {fetchingFolders
        ? <Spinner show fetching item={'folders'} />
        : <Spinner hide />
      }
      {fetchError
        ? <div>{fetchError}</div>
        : (
          <div>
            <PendingFolders folders={pendingFolders} />
            <RecentlyCompleted folders={recentlyCompleted} />
            <ReportPreview report={currentReport} />
          </div>
        )
      }
      <button onClick={handleFetchClick}>Get Recent Folders</button>
    </div>
  )
}
const { array, object } = React.PropTypes
ReportGenerator.propTypes = {
  pendingFolders: array,
  recentlyCompleted: array,
  currentReport: object,
}

function mapStateToProps(state) {
  const folders = state.folders.list.reduce((acc, nextFolder) => {
    if (nextFolder.fields.date_completed) {
      return {
        pending: acc.pending,
        completed: acc.completed.concat([nextFolder]),
      }
    }
    return {
      pending: acc.pending.concat([nextFolder]),
      completed: acc.completed,
    }
  }, { pending: [], completed: [] })
  return {
    fetchingFolders: state.folders.isFetching,
    pendingFolders: folders.pending,
    recentlyCompleted: folders.completed,
    currrentReport: state.currrentReport,
    fetchError: folders.error,
  }
}

function mapDispatchToProps(dispatch) {
  return { handleFetchClick: () => dispatch(fetchFolders('Blackburn')) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportGenerator)
