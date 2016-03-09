// folder actions
const GENERATE_REPORT = 'GENERATE_REPORT'
export function markCompleted(url) {
  return {
    type: GENERATE_REPORT,
    payload: { url },
  }
}

// folder reducer
export default function folder(state = {}, action) {
  const { payload } = action
  switch (action.type) {
    case 'GENERATE_REPORT':
      return Object.assign({}, state, payload)

    default:
      return state
  }
}
