import { combineReducers } from 'redux'
import { postReducer } from './reducers/postsReducer'
import { commentsReducer } from './reducers/commentsReducer'

export const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
