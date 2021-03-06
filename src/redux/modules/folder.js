// folder actions
const GENERATE_REPORT = 'GENERATE_REPORT'
export function markCompleted(url) {
  return {
    type: GENERATE_REPORT,
    payload: { url },
  }
}

const REQUEST_FOLDER = 'REQUEST_FOLDER'
function requestFolder(testNumber) {
  return {
    type: REQUEST_FOLDER,
    payload: { testNumber },
  }
}

const RECEIVE_FOLDER = 'RECEIVE_FOLDER'
function receiveFolder(testNumber, json) {
  return {
    type: RECEIVE_FOLDER,
    payload: {
      testNumber,
      json: Array.isArray(json) ? json[0] : json,
      receivedAt: Date.now(),
    },
    meta: {
      receiveDbFields: true,
    },
  }
}

const FETCH_FOLDER_FAILED = 'FETCH_FOLDER_FAILED'
function fetchFolderFailed(testNumber, err) {
  return {
    type: FETCH_FOLDER_FAILED,
    payload: err,
    error: true,
  }
}

export function fetchFolder(testNumber) {
  return (dispatch) => {
    dispatch(requestFolder(testNumber))
    fetch(`http://localhost:3000/folders/${testNumber}`)
      .then(response => response.ok
        ? response.json()
        : dispatch(fetchFolderFailed(testNumber, response.statusText))
      )
      .then(json => dispatch(receiveFolder(testNumber, json)))
  }
}

// folder reducer
export default function folder(state = {
  isFetching: false,
  error: null,
  fields: {},
}, action) {
  const { payload } = action
  switch (action.type) {
    case 'GENERATE_REPORT':
      return Object.assign({}, state, payload)

    case 'REQUEST_FOLDER':
      return Object.assign({}, state, { isFetching: true })

    case 'RECEIVE_FOLDER':
      return Object.assign({}, state, {
        isFetching: false,
        fields: Object.assign({}, state.fields, payload.json),
      })

    case 'FETCH_FOLDER_FAILED':
      return Object.assign({}, state, {
        isFetching: false,
        error: payload,
      })

    default:
      return state
  }
}
