const SET_DATE_FILTER = 'SET_DATE_FILTER'

// dateFilter actions
export function setDateFilter(days) {
  return {
    type: SET_DATE_FILTER,
    payload: { days },
  }
}

// dateFilter reducer
export default function dateFilter(state = { days: 30 }, action) {
  const { payload } = action
  switch (action.type) {
    case 'SET_DATE_FILTER':
      return payload

    default:
      return state
  }
}
