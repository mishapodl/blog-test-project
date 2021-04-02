import { Dispatch } from 'redux'
import {
  PostActions,
  PostsActionTypes,
  PostEditActions,
  IPost,
} from '../../types/posts'
import { loadPosts } from './thunks'

function getLocalPost() {
  return JSON.parse(localStorage.getItem('posts') || '')
}
function setLocalPost(posts: IPost[]) {
  localStorage.setItem('posts', JSON.stringify(posts))
}

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostActions>) => {
    try {
      dispatch({ type: PostsActionTypes.FETCH_POST })
      const data: IPost[] = await loadPosts()
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

export const updatePost = (data: IPost, id: number) => {
  let posts = getLocalPost()
  posts = posts.map((p: IPost) => (p.id === id ? data : p))
  setLocalPost(posts)

  return (dispatch: Dispatch<PostActions>) => {
    dispatch({
      type: PostsActionTypes.FETCH_POST_SUCCESS,
      payload: posts,
    })
  }
}

export const deletePost = (id: number, page: number) => {
  let posts = getLocalPost()
  posts = posts.filter((p: IPost) => p.id !== id)
  setLocalPost(posts)

  return (dispatch: Dispatch<PostActions>) => {
    dispatch({ type: PostEditActions.DELETE_POST, payload: { id, page } })
  }
}

export const addPost = (data: IPost) => {
  const posts = getLocalPost()
  posts.push(data)
  setLocalPost(posts)

  return (dispatch: Dispatch<PostActions>) => {
    dispatch({ type: PostEditActions.ADD_POST, payload: data })
  }
}
