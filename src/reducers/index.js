import { combineReducers } from 'redux'
import tweets from './tweets'
import authedUser from './authedUsers'
import users from './users'

export default combineReducers({
  authedUser,
  tweets,
  users
})