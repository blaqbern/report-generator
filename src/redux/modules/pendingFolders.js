const MARK_COMPLETED = 'MARK_COMPLETED'

export function markCompleted(id) {
  return {
    type: MARK_COMPLETED,
    payload: { id },
  }
}

export default function pendingFolders(state = [], action) {
  const { payload } = action
  switch (action.type) {
    case 'MARK_COMPLETED':
      return state.filter(folder => folder.id !== payload.id)

    default:
      return state
  }
}
