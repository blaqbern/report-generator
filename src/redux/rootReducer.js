import { combineReducers } from 'redux'
import pendingFolders from './modules/pendingFolders'
import recentlyCompleted from './modules/recentlyCompleted'

const rootReducer = combineReducers({
  pendingFolders,
  recentlyCompleted,
})

export default rootReducer
