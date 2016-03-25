import React from 'react'
import { connect } from 'react-redux'
import { fetchFolders } from '../redux/modules/folders'
import FolderList from '../components/FolderList'
import ReportPreview from '../components/ReportPreview'
import Spinner from '../components/Spinner'

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
        ? <Spinner fetching item={'folders'} />
        : null
      }
      {fetchError
        ? <div>{fetchError}</div>
        : (
          <div>
            <FolderList
              listName={'Pending Folders'}
              folders={pendingFolders}
            />
            <FolderList
              listName={'Recently Completed'}
              folders={recentlyCompleted}
            />
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
  return state.folders.list.reduce((acc, nextFolder) => {
    if (nextFolder.fields.dateCompleted) {
      return {
        pendingFolders: acc.pendingFolders,
        recentlyCompleted: acc.recentlyCompleted.concat([nextFolder]),
      }
    }
    return {
      pendingFolders: acc.pendingFolders.concat([nextFolder]),
      recentlyCompleted: acc.recentlyCompleted,
    }
  }, {
    pendingFolders: [],
    recentlyCompleted: [],
    fetchingFolders: state.folders.isFetching,
    currrentReport: state.currrentReport,
    fetchError: state.folders.error,
  })
}

function mapDispatchToProps(dispatch) {
  return { handleFetchClick: () => dispatch(fetchFolders('Blackburn')) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportGenerator)
