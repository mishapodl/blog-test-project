import axios from 'axios'
import { Dispatch } from 'redux'
import { PostActions, PostsActionTypes } from '../../types/posts'

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostActions>) => {
    try {
      dispatch({ type: PostsActionTypes.FETCH_POST })
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts?_limit=3'
      )
      dispatch({
        type: PostsActionTypes.FETCH_POST_SUCCESS,
        payload: data,
      })
    } catch (e) {
      dispatch({
        type: PostsActionTypes.FETCH_POST_ERROR,
        payload: 'Error',
      })
    }
  }
}
