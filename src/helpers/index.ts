import { POSTS_ON_PAGE } from '../constants'

export const getCountPages = (posts: any[]) => {
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
