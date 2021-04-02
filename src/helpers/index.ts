import { POSTS_ON_PAGE } from '../constants'
import { IPost } from './../types/posts'

export const getCountPages = (posts: IPost[]): number[] => {
  const pages: number[] = []
  const countPages =
    posts.length % POSTS_ON_PAGE === 1
      ? posts.length / POSTS_ON_PAGE
      : posts.length / POSTS_ON_PAGE + 1
  for (let i = 1; i < countPages; i++) {
    pages.push(i)
  }
  return pages
}

export const getLocal = (key: 'users' | 'posts' | 'comments') => {
  const data: any = localStorage.getItem(key)
  return data ? JSON.parse(data) : null
}

export const cutString = (str: string, count: number, key = ' ') => {
  return str.split(key).slice(0, count).join(' ')
}
