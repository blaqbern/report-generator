const SET_CURRENT_FOLDER = 'SET_CURRENT_FOLDER'

// currentFolder actions
export function setCurrentFolder(id) {
  return {
    type: SET_CURRENT_FOLDER,
    payload: { id },
  }
}

// currentFolder reducer
export default function currentFolder(state = 0, action) {
  const { payload } = action
  switch (action.type) {
    case 'SET_CURRENT_FOLDER':
      return payload.id

    default:
      return state
  }
}
