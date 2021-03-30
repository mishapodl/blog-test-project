import { useEffect } from 'react'
import { useActions } from './useActions'
import { useTypedSelector } from './useTypedSelector'

export const usePost = () => {
  const { posts, currentPostsPage } = useTypedSelector((state) => state.posts)
  const { fetchPosts, getLocalPosts } = useActions()

  useEffect(() => {
    localStorage.getItem('posts') ? getLocalPosts() : fetchPosts()
  }, [])

  return { posts, currentPostsPage }
}
