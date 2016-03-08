import folderReducer from './folder'
const GENERATE_REPORT = 'GENERATE_REPORT'

// folders actions
export function markCompleted(id) {
  return {
    type: GENERATE_REPORT,
    payload: { id },
  }
}

// folders reducer
export default function folders(state = [], action) {
  const { payload } = action
  switch (action.type) {
    case 'GENERATE_REPORT':
      return state.map(folder => {
        if (payload.id === folder.id) {
          return folderReducer(folder, action)
        }
        return state
      })

    default:
      return state
  }
}
