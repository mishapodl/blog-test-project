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
