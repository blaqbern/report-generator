import { combineReducers } from 'redux'
import dateFilter from './modules/dateFilter'
import folders from './modules/folders'
import instrumentation from './modules/instrumentation'

const rootReducer = combineReducers({
  dateFilter,
  folders,
  instrumentation,
})

export default rootReducer
