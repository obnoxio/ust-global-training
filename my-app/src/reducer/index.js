import { combineReducers } from 'redux'

import postsReducer from './postreducer'

const rootReducer = combineReducers({
  posts: postsReducer,
})

export default rootReducer