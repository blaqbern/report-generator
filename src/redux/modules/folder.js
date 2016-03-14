// folder actions
const GENERATE_REPORT = 'GENERATE_REPORT'
export function markCompleted(url) {
  return {
    type: GENERATE_REPORT,
    payload: { url },
  }
}

// folder reducer
export default function folder(state = {
  expanded: false,
  fields: {},
}, action) {
  const { payload } = action
  switch (action.type) {
    case 'GENERATE_REPORT':
      return Object.assign({}, state, payload)

    case 'TOGGLE_EXPAND_COLLAPSE':
      return Object.assign({}, state, { expanded: !state.expanded })

    default:
      return state
  }
}
