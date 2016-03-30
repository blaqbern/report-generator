const REQUEST_DATA_READING = 'REQUEST_DATA_READING'
function requestDataReading() {
  return { type: REQUEST_DATA_READING }
}
const RECIEVE_DATA_READING = 'RECIEVE_DATA_READING'
function receiveDataReading(json) {
  return {
    type: RECIEVE_DATA_READING,
    payload: { data: json },
  }
}

const REQUEST_SET_ZERO = 'REQUEST_SET_ZERO'
function requestSetZero() {
  return { type: REQUEST_SET_ZERO }
}
const RECEIVE_ZERO_SET = 'RECEIVE_ZERO_SET'
function receiveZeroSet() {
  return { type: RECEIVE_ZERO_SET }
}

const REQUEST_FAILED = 'REQUEST_FAILED'
function requestFailed(name, err) {
  return {
    type: REQUEST_FAILED,
    payload: err,
    error: true,
  }
}

export function takeMeasurement() {
  return (dispatch) => {
    dispatch(requestDataReading())
    fetch('http://localhost:40001/currentReadings')
      .then(response => response.ok
        ? response.json()
        : dispatch(requestFailed('data', response.statusText))
      )
      .then(json => dispatch(receiveDataReading(json)))
  }
}

export function zeroLaser() {
  return (dispatch) => {
    dispatch(requestSetZero())
    fetch('http://localhost:40001/zeroLaser')
      .then(response => response.ok
        ? dispatch(receiveZeroSet())
        : dispatch(requestFailed('zero', response.statusText))
      )
  }
}

const initialData = {
  laser: {
    value: 0,
    units: 'counts',
  },
  airTempSensors: {
    values: [20, 20, 20, 20, 20, 20, 20],
    units: '°C',
  },
  materialTempSensors: {
    values: [20, 20, 20, 20, 20, 20, 20],
    units: '°C',
  },
  barometer: {
    value: 760,
    units: 'mmHg',
  },
  hygrometer: {
    value: 50,
    units: '%',
  },
}

export default function instrumentation(state = {
  communicating: false,
  okay: false,
  data: initialData,
}, action) {
  const { payload } = action
  switch (action.type) {
    case REQUEST_DATA_READING:
    case REQUEST_SET_ZERO:
      return Object.assign({}, state, {
        communicating: true,
      })

    case RECIEVE_DATA_READING:
      return Object.assign({}, state, {
        communicating: false,
        data: payload.data,
      })

    case RECEIVE_ZERO_SET:
      return Object.assign({}, state, { communicating: false })

    case REQUEST_FAILED:
      return Object.assign({}, state, { okay: false })

    default:
      return state
  }
}
