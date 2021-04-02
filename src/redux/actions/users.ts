import { Dispatch } from 'redux'
import { UsersActions, UsersActionTypes, IUser } from '../../types/users'
import { loadUsers } from './thunks'

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UsersActions>) => {
    try {
      dispatch({ type: UsersActionTypes.FETCH_USERS })
      let data: IUser[] = await loadUsers()
      data = data.map(({ id, name }) => ({ id, name }))

      dispatch({
        type: UsersActionTypes.FETCH_USERS_SUCCESS,
        payload: data,
      })
      localStorage.setItem('users', JSON.stringify(data))
    } catch (e) {
      dispatch({
        type: UsersActionTypes.FETCH_USERS_ERROR,
        payload: 'Error',
      })
    }
  }
}

export const getLocalUsers = () => {
  return (dispatch: Dispatch<UsersActions>) => {
    dispatch({
      type: UsersActionTypes.FETCH_USERS_SUCCESS,
      payload: JSON.parse(localStorage.getItem('users') || ''),
    })
  }
}
