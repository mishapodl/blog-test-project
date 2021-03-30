import { Dispatch } from 'redux'
import {
  PostActions,
  PostsActionTypes,
  PostEditActions,
} from '../../types/posts'
import { loadPosts } from './thunks'

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostActions>) => {
    try {
      dispatch({ type: PostsActionTypes.FETCH_POST })
      const data = await loadPosts()
      dispatch({
        type: PostsActionTypes.FETCH_POST_SUCCESS,
        payload: data,
      })
      localStorage.setItem('posts', JSON.stringify(data))
    } catch (e) {
      dispatch({
        type: PostsActionTypes.FETCH_POST_ERROR,
        payload: 'Error',
      })
    }
  }
}

export const getLocalPosts = () => {
  return (dispatch: Dispatch<PostActions>) => {
    dispatch({
      type: PostsActionTypes.FETCH_POST_SUCCESS,
      payload: JSON.parse(localStorage.getItem('posts') || ''),
    })
  }
}

export const setPostsPage = (page: number): PostActions => {
  return { type: PostsActionTypes.SET_POSTS_PAGE, payload: page }
}

export const updatePost = (data: any, id: number) => {
  return (dispatch: Dispatch<PostActions>) => {
    let posts = JSON.parse(localStorage.getItem('posts') || '')
    posts = posts.map((p: any) => (p.id === id ? data : p))
    localStorage.setItem('posts', JSON.stringify(posts))

    dispatch({
      type: PostsActionTypes.FETCH_POST_SUCCESS,
      payload: posts,
    })
  }
}

export const deletePost = (id: number, page: number) => {
  return (dispatch: Dispatch<PostActions>) => {
    let posts = JSON.parse(localStorage.getItem('posts') || '')
    posts = posts.filter((p: any) => p.id !== id)
    localStorage.setItem('posts', JSON.stringify(posts))

    dispatch({ type: PostEditActions.DELETE_POST, payload: { id, page } })
  }
}

export const addPost = (data: any): PostActions => {
  return { type: PostEditActions.ADD_POST, payload: data }
}
