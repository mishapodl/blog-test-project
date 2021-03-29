import { combineReducers } from 'redux'
import { postReducer } from './reducers/postsReducer'

export const rootReducer = combineReducers({
  posts: postReducer,
})

export type RootState = ReturnType<typeof rootReducer>
