import {
    AUTH_USER,
    UNAUTH_USER,
    SET_USER } from '../actions/actionTypes'


const initialState = {
  isAuthenticated: false,
  username: "",
  token: "",
  profile:undefined,
}

const auth = (state = initialState, action) => {
    console.log(action)
  switch(action.type){
    case AUTH_USER:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
        token: action.payload.token
      }
    case UNAUTH_USER:
      return initialState
    case SET_USER:
        return {
            ...state,
            profile: action.payload.profile
        }
    default:
      return state
  }
}

export default auth
