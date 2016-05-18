import { combineReducers } from 'redux'
import dateFilter from './modules/dateFilter'
import folders from './modules/folders'
import instrumentation from './modules/instrumentation'
import { routerReducer as routing } from 'react-router-redux'

const rootReducer = combineReducers({
  dateFilter,
  folders,
  instrumentation,
  routing,
})

export default rootReducer
