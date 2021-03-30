import { POSTS_ON_PAGE } from '../../constants'
import {
  IPostsState,
  PostActions,
  PostEditActions,
  PostsActionTypes,
} from '../../types/posts'

const initialState: IPostsState = {
  posts: [],
  currentPostsPage: [],
  loading: false,
  error: null,
  page: 1,
}

const getCurrentPost = (posts: any[], page: number) => {
  const start = page === 1 ? 0 : page * POSTS_ON_PAGE - POSTS_ON_PAGE
  return posts.slice(start, start + POSTS_ON_PAGE)
}

const toFilterPosts = (posts: any[], id: number) => {
  return posts.filter((p) => p.id !== id)
}
const toUpdatePost = (posts: any[], data: any, id: number) => {
  return posts.map((p) => (p.id === id ? data : p))
}

export const postReducer = (
  state = initialState,
  aciton: PostActions
): IPostsState => {
  switch (aciton.type) {
    case PostsActionTypes.FETCH_POST:
      return { ...state, loading: true }
    case PostsActionTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        posts: aciton.payload,
        currentPostsPage: aciton.payload.slice(0, POSTS_ON_PAGE),
      }
    case PostsActionTypes.FETCH_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: aciton.payload,
        posts: [],
      }
    case PostsActionTypes.SET_POSTS_PAGE:
      return {
        ...state,
        page: aciton.payload,
        currentPostsPage: getCurrentPost(state.posts, aciton.payload),
      }
    case PostEditActions.UPDATE_POST:
      const { id, data } = aciton.payload
      return {
        ...state,
        posts: toUpdatePost(state.posts, data, id),
        currentPostsPage: toUpdatePost(state.currentPostsPage, data, id),
      }
    case PostEditActions.DELETE_POST:
      const updatedPosts = toFilterPosts(state.posts, aciton.payload.id)
      return {
        ...state,
        posts: updatedPosts,
        currentPostsPage: getCurrentPost(updatedPosts, aciton.payload.page),
      }
    case PostEditActions.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, aciton.payload],
      }
    default:
      return state
  }
}
