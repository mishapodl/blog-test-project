import {
  IUsersState,
  UsersActions,
  UsersActionTypes,
} from '../../types/users'

const initialState: IUsersState = {
  users: [],
  loading: false,
  error: null,
}

export const usersReducer = (
  state = initialState,
  aciton: UsersActions
): IUsersState => {
  switch (aciton.type) {
    case UsersActionTypes.FETCH_USERS:
      return { ...state, loading: true }
    case UsersActionTypes.FETCH_USERS_SUCCESS:
      return {
        loading: false,
        error: null,
        users: aciton.payload,
      }
    case UsersActionTypes.FETCH_USERS_ERROR:
      return {
        loading: false,
        error: aciton.payload,
        users: [],
      }
    default:
      return state
  }
}
