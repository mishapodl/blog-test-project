import { combineReducers } from 'redux'
import { postReducer } from './reducers/postsReducer'
import { commentsReducer } from './reducers/commentsReducer'
import { usersReducer } from './reducers/usersReducer'

export const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentsReducer,
  users: usersReducer,
})

export type RootState = ReturnType<typeof rootReducer>
