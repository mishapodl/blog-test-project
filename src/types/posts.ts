export interface IPostsState {
  posts: any[]
  currentPostsPage: any[]
  loading: boolean
  error: null | string
  page: number
}

export enum PostsActionTypes {
  FETCH_POST = 'FETCH_POST',
  FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS',
  FETCH_POST_ERROR = 'FETCH_POST_ERROR',
  SET_POSTS_PAGE = 'SET_POSTS_PAGE',
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

interface ISetPostsPageAction {
  type: PostsActionTypes.SET_POSTS_PAGE
  payload: number
}

export type PostActions =
  | IFetchPostAction
  | IFetchPostSucessAction
  | IFetchPostErrorAction
  | ISetPostsPageAction
