const ADD_FOLDER = 'ADD_FOLDER'

export function addFolder(folder) {
  return {
    type: ADD_FOLDER,
    payload: { folder },
  }
}

export default function recentlyCompleted(state = [], action) {
  const { payload } = action
  switch (action.type) {
    case 'ADD_FOLDER':
      return [
        ...state,
        payload.folder,
      ]

    default:
      return state
  }
}
