import { useEffect } from 'react'
import { IPost } from '../types/posts'
import { useActions } from './useActions'
import { useTypedSelector } from './useTypedSelector'

export const usePost = () => {
  const { posts, currentPostsPage } = useTypedSelector((state) => state.posts)
  const { fetchPosts, getLocalPosts } = useActions()

  useEffect(() => {
    localStorage.getItem('posts') ? getLocalPosts() : fetchPosts()
  }, [])

  const specificPost = (id: number): IPost => {
    return posts.filter((p: IPost) => p.id == id)[0]
  }

  return { posts, currentPostsPage, specificPost }
}
