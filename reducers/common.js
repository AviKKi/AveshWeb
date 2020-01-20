import {
  SHOW_TOPLOADER,
  HIDE_TOPLOADER,
  SHOW_SPINNER,
  HIDE_SPINNER,
  POP_SNACKBAR,
  HIDE_SNACKBAR} from '../actions/actionTypes'


const initialState = {
  topLoader: false,
  spinner: false,
  snackbar: false,
  snackbarMessage: ""
}

const auth = (state = initialState, action) => {
  console.log(action)
  switch(action.type){
    case SHOW_SPINNER:
      return {
        ...state,
        spinner: true,
      }
    case HIDE_SPINNER:
      return {
        ...state,
        spinner: false,
      }
    case SHOW_TOPLOADER:
      return {
        ...state,
        topLoader: true
      }
    case HIDE_TOPLOADER:
      return {
        ...state,
        topLoader: false
      }
    case POP_SNACKBAR:
        return {
            ...state,
            snackbar:true,
            snackbarMessage: action.payload.snackbarMessage
        }
    case HIDE_SNACKBAR:
        return{
            ...state,
            snackbar:false,
            snackbarMessage:""
        }
    default:
      return state
  }
}

export default auth
