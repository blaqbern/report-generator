import fetch from 'isomorphic-fetch'
import folderReducer from './folder'

// folders actions
const GENERATE_REPORT = 'GENERATE_REPORT'
export function markCompleted(id) {
  return {
    type: GENERATE_REPORT,
    payload: { id },
  }
}

const REQUEST_FOLDERS = 'REQUEST_FOLDERS'
export function requestFolders(operator) {
  return {
    type: REQUEST_FOLDERS,
    payload: { operator },
  }
}

const RECEIVE_FOLDERS = 'RECEIVE_FOLDERS'
export function receiveFolders(operator, json) {
  return {
    type: RECEIVE_FOLDERS,
    payload: {
      operator,
      folders: json,
      receivedAt: Date.now(),
    },
  }
}

const RECEIVE_FOLDERS_FAILED = 'RECEIVE_FOLDERS_FAILED'
export function receiveFoldersFailed(operator, err) {
  return {
    type: RECEIVE_FOLDERS_FAILED,
    payload: { err },
  }
}

export function fetchFolers(operator) {
  return (dispatch) => {
    dispatch(requestFolders(operator))
    return fetch(`/operators/${operator}/folders`)
      .then(response => response.json())
      .then(json => dispatch(receiveFolders(operator, json)))
      .catch(err => dispatch(receiveFoldersFailed(operator, err)))
  }
}

// folders reducer
export default function folders(state = {
  isFetching: false,
  list: [],
}, action) {
  const { payload } = action
  switch (action.type) {
    case 'REQUEST_FOLDERS':
      return Object.assign({}, state, { isFetching: true })

    case 'RECEIVE_FOLDERS':
      return Object.assign({}, state, {
        isFetching: false,
        folders: payload.folders,
      })

    case 'GENERATE_REPORT':
      return state.list.map(folder => {
        if (payload.id === folder.id) {
          return folderReducer(folder, action)
        }
        return state
      })

    default:
      return state
  }
}
