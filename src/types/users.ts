export interface IUser {
  id: number
  name: string
}

export interface IUsersState {
  users: IUser[]
  loading: boolean
  error: string | null
}

export enum UsersActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
  SET_POSTS_PAGE = 'SET_POSTS_PAGE',
}

interface IFetchUsersAction {
  type: UsersActionTypes.FETCH_USERS
}

interface IFetchUsersSucessAction {
  type: UsersActionTypes.FETCH_USERS_SUCCESS
  payload: IUser[]
}

interface IFetchUsersErrorAction {
  type: UsersActionTypes.FETCH_USERS_ERROR
  payload: string
}

export type UsersActions =
  | IFetchUsersAction
  | IFetchUsersSucessAction
  | IFetchUsersErrorAction
