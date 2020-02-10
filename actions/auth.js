import Router from 'next/router'
import axios from 'axios'

axios.defaults.baseURL = "https://api.aveshgecr.in"
// axios.defaults.baseURL = "http://localhost:8080"
import {
  AUTH_USER,
  UNAUTH_USER,
  SHOW_TOPLOADER,
  HIDE_TOPLOADER,
  SET_USER,
  POP_SNACKBAR
} from './actionTypes'

const fetchProfile = async(token)=>{
    const reqPayload = {
        headers: {
            "Authorization": `Token ${token}`
        }
    }
    const res = await axios.get('/users/profile', reqPayload)
    return res.data
}

export const loginUser = payload => async dispatch => {
    const {errorHandler, ...credentials} = payload
    try {
        dispatch({type:SHOW_TOPLOADER})
        let res = await axios.post('/users/login/', credentials,)
        console.log(res)
        const token = res.data.key
        const profile = await fetchProfile(token)
        dispatch({type:SET_USER, payload:{profile:profile}})
        dispatch({type: AUTH_USER, payload:{username:profile.username, token:token}})
        Router.push("/UserDashboard")
    }
    catch(e){
        const error = Object.keys(e.response.data)[0]+":"+Object.values(e.response.data)[0][0]
        dispatch({type:POP_SNACKBAR, payload:{snackbarMessage:error}})
    }
    finally{
        dispatch({type:HIDE_TOPLOADER})
    }
}

export const logoutUser = (payload)=> async dispatch =>{

    try{
        dispatch({type:SHOW_TOPLOADER})
        const {token} = payload
        const headerPayload = {
            headers: {
                "Authorization": `Token ${token}`
            }
        }
        let res = await axios.post('users/logout/', {}, headerPayload)
        dispatch({type:POP_SNACKBAR, payload:{snackbarMessage:"Logged Out Successfully"}})
    }
    catch(e){
        const error = Object.keys(e.response.data)[0]+":"+Object.values(e.response.data)[0][0]
        dispatch({type:POP_SNACKBAR, payload:{snackbarMessage:error}})
    }finally{
        dispatch({type:UNAUTH_USER})
        dispatch({type:HIDE_TOPLOADER})
    }
}

export const registerUser = (payload)=> async dispatch=>{
    try {
        dispatch({type:SHOW_TOPLOADER})
        console.log(payload)
        let res = await axios.post('users/registration', payload, {headers:{"Content-Type":"application/json"}})
        const token = res.data.key
        const profile = fetchProfile(token)
        dispatch({ type:SET_USER, payload:{profile} })
        dispatch({type:AUTH_USER, payload:{username:payload.username, token:token}})
        Router.push('/UserDashboard')
    } catch (e) {
        const error = Object.keys(e.response.data)[0]+":"+Object.values(e.response.data)[0][0]
        dispatch({type:POP_SNACKBAR, payload:{snackbarMessage:error}})
    } finally {
        dispatch({type:HIDE_TOPLOADER})
        setTimeout(1000,()=>dispatch({type:HIDE_TOPLOADER}))
    }
}
