import axios from "axios";

const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/'
const API_KEY = 'AIzaSyCdUkRgZoi3Z8V0AgwRBHLgUE-uGhR19H0'

export const signupWithEmailAndPassword =  (details, callback) => {
     return async(dispatch) => {
        try{
            const response = await axios.post(`${BASE_URL}accounts:signUp?key=${API_KEY}`, {
                email: details.email,
                password: details.password,
                returnSecureToken: true
            })
            // console.log(response);     
            dispatch({
                type: 'SIGNUP',
                payload: response.data
            })
            localStorage.setItem("token", response.data.idToken)
            return callback(response.data)       
        }
        catch(error) {
            // console.log(error.response);
            return callback({
                error: true,
                response: error.response
            })
        }  
    }
}

export const loginWithEmailAndPassword = (details, callback) => {
    return async(dispatch) => {
        try{
            const response = await axios.post(`${BASE_URL}accounts:signInWithPassword?key=${API_KEY}`, {
                email: details.email,
                password: details.password,
                returnSecureToken: true
            })
            // console.log(response);     
            dispatch({
                type: 'LOGIN',
                payload: response.data
            })
            localStorage.setItem("token", response.data.idToken)
            return callback(response.data)       
        }
        catch(error) {
            // console.log(error.response);
            return callback({
                error: true,
                response: error.response
            })
        }  
    }
}

export const checkIsLoggedIn = (callback) => {
    return async(dispatch) => {
        try{
            let token = localStorage.getItem("token")
            if(!token) {
                return;
            }
            const response = await axios.post(`${BASE_URL}accounts:lookup?key=${API_KEY}`, {
                idToken: token
            })
            // console.log(response);     
            dispatch({
                type: 'LOGIN',
                payload: { 
                    idToken: token,
                ...response.data
                }
            })
            return callback(response.data)       
        }
        catch(error) {
            // console.log(error.response);
            return callback({
                error: true,
                response: error.response
            })
        } 
    }
}
// https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=[API_KEY]

