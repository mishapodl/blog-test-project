import { useEffect } from 'react'
import { getLocal } from '../helpers'
import { IPost } from '../types/posts'
import { useActions } from './useActions'
import { useTypedSelector } from './useTypedSelector'

export const usePost = () => {
  const { posts, currentPostsPage } = useTypedSelector((state) => state.posts)
  const { fetchPosts, getLocalPosts } = useActions()

  useEffect(() => {
    getLocal('posts') ? getLocalPosts() : fetchPosts()
  }, [])

  const specificPost = (id: number): IPost => {
    return posts.filter((p: IPost) => p.id == id)[0]
  }

  const getLastId = (key: 'user' | 'post') => {
    return (
      (posts.length &&
        posts[posts.length - 1][key === 'user' ? 'userId' : 'id']) ||
      0
    )
  }

  return { posts, currentPostsPage, specificPost, getLastId }
}
