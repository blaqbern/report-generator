import React from 'react'
import { connect } from 'react-redux'
import { fetchFolders } from '../redux/modules/folders'
import FolderList from '../components/FolderList'
import ReportPreview from '../components/ReportPreview'
import Spinner from '../components/Spinner'

function ReportGenerator({
  currentFolder,
  fetchError,
  fetchingFolders,
  handleFetchClick,
  pendingFolders,
  recentlyCompleted,
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
            <div style={{ float: 'left', borderRight: '1px solid gray' }}>
              <FolderList
                listName={'Pending Folders'}
                folders={pendingFolders}
              />
              <FolderList
                listName={'Recently Completed'}
                folders={recentlyCompleted}
              />
            </div>
            <div>
              <ReportPreview report={currentReport} />
            </div>
          </div>
        )
      }
      <button onClick={handleFetchClick}>Get Recent Folders</button>
    </div>
  )
}
const { array, bool, func, object } = React.PropTypes
ReportGenerator.propTypes = {
  currentFolder: object,
  fetchError: bool,
  fetchingFolders: bool,
  handleFetchClick: func,
  pendingFolders: array,
  recentlyCompleted: array,
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
    currrentFolder: state.currrentFolder,
    fetchError: state.folders.error,
    fetchingFolders: state.folders.isFetching,
    pendingFolders: [],
    recentlyCompleted: [],
  })
}

function mapDispatchToProps(dispatch) {
  return { handleFetchClick: () => dispatch(fetchFolders('Blackburn')) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportGenerator)
