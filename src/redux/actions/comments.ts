import { Dispatch } from 'redux'
import {
  CommentsActions,
  CommentsActionTypes,
  IComment,
} from '../../types/comments'
import { loadComments } from './thunks'

export const fetchComments = (id: number) => {
  return async (dispatch: Dispatch<CommentsActions>) => {
    try {
      dispatch({ type: CommentsActionTypes.FETCH_COMMENTS })
      const data: IComment[] = await loadComments(id)
      dispatch({
        type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS,
        payload: data,
      })
    } catch (e) {
      dispatch({
        type: CommentsActionTypes.FETCH_COMMENTS_ERROR,
        payload: 'Error',
      })
    }
  }
}
