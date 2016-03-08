import { combineReducers } from 'redux'
import currentFolder from './modules/currentFolder'
import dateFilter from './modules/dateFilter'
import folders from './modules/folders'

const rootReducer = combineReducers({
  currentFolder,
  dateFilter,
  folders,
})

export default rootReducer
