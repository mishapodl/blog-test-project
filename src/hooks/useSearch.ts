import { useState } from 'react'
import { usePost } from './usePost'
import { IPost } from './../types/posts'

export const useSearch = () => {
  const { posts } = usePost()
  const [findedPosts, setFindedPosts] = useState<IPost[]>([])

  const searchText = (text: string, findBy: string) => {
    const resSearching = posts.slice(0, 10).filter(({ title, body }: IPost) => {
      return findBy === 'title' ? title.includes(text) : body.includes(text)
    })
    setFindedPosts(resSearching)
  }

  return { searchText, findedPosts }
}
