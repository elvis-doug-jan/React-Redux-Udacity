import { combineReducers } from 'redux'
import tweets from './tweets'
import authedUser from './authedUsers'
import users from './users'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authedUser,
  tweets,
  users,
  loadingBar: loadingBarReducer
})