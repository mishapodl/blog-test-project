// Comments
export interface IComment {
  id: number
  postId: number
  name: string
  body: string
  email: string
}

export interface ICommentsState {
  comments: IComment[]
  loading: boolean
  error: string | null
}

export enum CommentsActionTypes {
  FETCH_COMMENTS = 'FETCH_COMMENTS',
  FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS',
  FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR',
  SET_POSTS_PAGE = 'SET_POSTS_PAGE',
}

interface IFetchCommentsAction {
  type: CommentsActionTypes.FETCH_COMMENTS
}

interface IFetchCommentsSucessAction {
  type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS
  payload: IComment[]
}

interface IFetchCommentsErrorAction {
  type: CommentsActionTypes.FETCH_COMMENTS_ERROR
  payload: string
}

export type CommentsActions =
  | IFetchCommentsAction
  | IFetchCommentsSucessAction
  | IFetchCommentsErrorAction
