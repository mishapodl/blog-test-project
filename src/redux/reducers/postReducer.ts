const initialState = {
  allPosts: [],
}

export const postReducer = (state = initialState, aciton: any) => {
  switch (aciton.type) {
    case 'LOAD':
      return { ...state }

    default:
      return state
  }
}
