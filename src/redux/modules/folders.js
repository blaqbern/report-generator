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
function requestFolders(operator) {
  return {
    type: REQUEST_FOLDERS,
    payload: { operator },
  }
}

const RECEIVE_FOLDERS = 'RECEIVE_FOLDERS'
function receiveFolders(operator, json) {
  return {
    type: RECEIVE_FOLDERS,
    payload: {
      operator,
      json,
      receivedAt: Date.now(),
    },
    meta: {
      receiveDbFields: true,
    },
  }
}

const FETCH_FOLDERS_FAILED = 'FETCH_FOLDERS_FAILED'
function fetchFoldersFailed(err) {
  return {
    type: FETCH_FOLDERS_FAILED,
    payload: err,
    error: true,
  }
}

export function fetchFolders(operator) {
  return dispatch => {
    dispatch(requestFolders(operator))
    return fetch(`http://localhost:3000/operators/${operator}/folders`)
      .then(response => response.ok
        ? response.json()
        : dispatch(fetchFoldersFailed(response.statusText))
      )
      .then(json => dispatch(receiveFolders(operator, json)))
  }
}

// folders reducer
export default function folders(state = {
  isFetching: false,
  error: null,
  list: [],
}, action) {
  const { payload } = action
  switch (action.type) {
    case 'REQUEST_FOLDERS':
      return Object.assign({}, state, { isFetching: true })

    case 'RECEIVE_FOLDERS':
      return Object.assign({}, state, {
        isFetching: false,
        list: payload.json.map(folder => ({
          isFetching: false,
          error: null,
          fields: folder,
        })),
      })

    case 'FETCH_FOLDERS_FAILED':
      return Object.assign({}, state, {
        isFetching: false,
        error: payload,
      })

    case 'GENERATE_REPORT':
    case 'REQUEST_FOLDER':
    case 'RECEIVE_FOLDER':
    case 'FETCH_FOLDER_FAILED':
      return Object.assign({}, state, {
        list: state.list.map(folder => {
          if (payload.testNumber === folder.fields.testNumber) {
            return folderReducer({
              isFetching: folder.isFetching,
              fields: folder.fields,
            }, action)
          }
          return folder
        }),
      })

    default:
      return state
  }
}
