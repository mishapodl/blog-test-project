export interface IPost {
  id: number
  userId: number
  title: string
  body: string
}

export interface IPostsState {
  posts: IPost[]
  currentPostsPage: IPost[]
  loading: boolean
  error: null | string
  page: number
}

// Posts
export enum PostsActionTypes {
  FETCH_POST = 'FETCH_POST',
  FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS',
  GET_POST_LOCAL = 'GET_POST_LOCAL',
  FETCH_POST_ERROR = 'FETCH_POST_ERROR',
  SET_POSTS_PAGE = 'SET_POSTS_PAGE',
}

interface IFetchPostAction {
  type: PostsActionTypes.FETCH_POST
}

interface IFetchPostSucessAction {
  type: PostsActionTypes.FETCH_POST_SUCCESS
  payload: IPost[]
}

interface IGetPostLocalAction {
  type: PostsActionTypes.GET_POST_LOCAL
  payload: IPost[]
}

interface IFetchPostErrorAction {
  type: PostsActionTypes.FETCH_POST_ERROR
  payload: string
}

interface ISetPostsPageAction {
  type: PostsActionTypes.SET_POSTS_PAGE
  payload: number
}

export enum PostEditActions {
  UPDATE_POST = 'UPDATE_POST',
  DELETE_POST = 'DELETE_POST',
  ADD_POST = 'ADD_POST',
}

interface IUpdatePostAction {
  type: PostEditActions.UPDATE_POST
  payload: {
    id: number
    data: IPost
  }
}

interface IAddPostAction {
  type: PostEditActions.ADD_POST
  payload: IPost
}

interface IDeletePostsPageAction {
  type: PostEditActions.DELETE_POST
  payload: {
    id: number
    page: number
  }
}

export type PostActions =
  | IFetchPostAction
  | IFetchPostSucessAction
  | IFetchPostErrorAction
  | ISetPostsPageAction
  | IDeletePostsPageAction
  | IAddPostAction
  | IUpdatePostAction
  | IGetPostLocalAction
