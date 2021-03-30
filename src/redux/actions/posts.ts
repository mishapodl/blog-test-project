import axios from 'axios'
import { Dispatch } from 'redux'
import { LIMIT_LODAED_POSTS } from '../../constants'
import { PostActions, PostsActionTypes } from '../../types/posts'

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostActions>) => {
    try {
      dispatch({ type: PostsActionTypes.FETCH_POST })
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
        {
          params: { _limit: LIMIT_LODAED_POSTS },
        }
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

export const setPostsPage = (page: number): PostActions => {
  return { type: PostsActionTypes.SET_POSTS_PAGE, payload: page }
}
