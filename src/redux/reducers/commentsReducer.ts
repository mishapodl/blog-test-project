import {
  ICommentsState,
  CommentsActions,
  CommentsActionTypes,
} from '../../types/comments'

const initialState: ICommentsState = {
  comments: [],
  loading: false,
  error: null,
}

export const commentsReducer = (
  state = initialState,
  aciton: CommentsActions
): ICommentsState => {
  switch (aciton.type) {
    case CommentsActionTypes.FETCH_COMMENTS:
      return { ...state, loading: true }
    case CommentsActionTypes.FETCH_COMMENTS_SUCCESS:
      return {
        loading: false,
        error: null,
        comments: aciton.payload,
      }
    case CommentsActionTypes.FETCH_COMMENTS_ERROR:
      return {
        loading: false,
        error: aciton.payload,
        comments: [],
      }
    default:
      return state
  }
}
