import { useEffect } from 'react'
import { getLocal } from '../helpers'
import { IUser } from './../types/users'
import { useActions } from './useActions'
import { useTypedSelector } from './useTypedSelector'

export const useUsers = () => {
  const { users } = useTypedSelector((state) => state.users)
  const { fetchUsers, getLocalUsers } = useActions()

  useEffect(() => {
    getLocal('users') ? getLocalUsers() : fetchUsers()
  }, [])

  const getUser = (id: number | null): IUser => {
    return users.filter((u: IUser) => u.id == id)[0]
  }

  return { getUser }
}
