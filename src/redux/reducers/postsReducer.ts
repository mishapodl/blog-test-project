import { IPostsState, PostActions, PostsActionTypes } from '../../types/posts'

const initialState: IPostsState = {
  posts: [],
  loading: false,
  error: null,
}

export const postReducer = (
  state = initialState,
  aciton: PostActions
): IPostsState => {
  switch (aciton.type) {
    case PostsActionTypes.FETCH_POST:
      return {
        ...state,
        loading: true,
      }
    case PostsActionTypes.FETCH_POST_SUCCESS:
      return {
        loading: false,
        error: null,
        posts: aciton.payload,
      }
    case PostsActionTypes.FETCH_POST_ERROR:
      return {
        loading: false,
        error: aciton.payload,
        posts: [],
      }
    default:
      return state
  }
}
