import { combineReducers } from 'redux'
import dateFilter from './modules/dateFilter'
import folders from './modules/folders'

const rootReducer = combineReducers({
  dateFilter,
  folders,
})

export default rootReducer
