import axios from 'axios'
import { LIMIT_LODAED_POSTS } from '../../constants'

export const loadPosts = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts',
    {
      params: { _limit: LIMIT_LODAED_POSTS },
    }
  )
  return data
}

export const loadComments = async (id: number) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/post/${id}/comments`
  )
  return data
}

export const loadUsers = async () => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users?_limit=${
      Math.round(LIMIT_LODAED_POSTS / 10) + 1
    }`
  )
  return data
}
