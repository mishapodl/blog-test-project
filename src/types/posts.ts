export interface IPostsState {
  posts: any[]
  loading: boolean
  error: null | string
}

export enum PostsActionTypes {
  FETCH_POST = 'FETCH_POST',
  FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS',
  FETCH_POST_ERROR = 'FETCH_POST_ERROR',
}

interface IFetchPostAction {
  type: PostsActionTypes.FETCH_POST
}

interface IFetchPostSucessAction {
  type: PostsActionTypes.FETCH_POST_SUCCESS
  payload: any[]
}

interface IFetchPostErrorAction {
  type: PostsActionTypes.FETCH_POST_ERROR
  payload: string
}

export type PostActions =
  | IFetchPostAction
  | IFetchPostSucessAction
  | IFetchPostErrorAction
