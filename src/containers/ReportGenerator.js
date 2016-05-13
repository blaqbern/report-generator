import React from 'react'
import { connect } from 'react-redux'
import { fetchFolders } from '../redux/modules/folders'
import Folders from '../components/Folders'
import Spinner from '../components/Spinner'

function ReportGenerator({
  children,
  fetchError,
  fetchingFolders,
  handleFetchClick,
  activeFolders,
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
              <Folders
                listName={'Active Folders'}
                folders={activeFolders}
              />
            </div>
            <div>
              {children}
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
  children: object,
  fetchError: bool,
  fetchingFolders: bool,
  handleFetchClick: func,
  activeFolders: array,
}

function mapStateToProps(state) {
  return {
    fetchError: state.folders.error,
    fetchingFolders: state.folders.isFetching,
    activeFolders: state.folders.list,
  }
}

function mapDispatchToProps(dispatch) {
  return { handleFetchClick: () => dispatch(fetchFolders('Blackburn')) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportGenerator)
