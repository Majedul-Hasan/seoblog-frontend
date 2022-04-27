import fetch from 'isomorphic-fetch';
import { API } from '../config';

import cookie from 'js-cookie'



export const signupAction = (user)=>{
    return fetch(`${API}/auth/signup`, {
        method : 'POST',
        headers:{
            Accept : 'Application/json',
            'Content-Type': 'Application/json',
        },
        body: JSON.stringify(user)
    })
    .then(response =>{
        return response.json()
    } )
    .catch(err =>console.log(err))
}


export const signinAction = (user)=>{
    return fetch(`${API}/auth/signin`, {
        method : 'POST',
        headers:{
            Accept : 'Application/json',
            'Content-Type': 'Application/json',
        },
        body: JSON.stringify(user)
    })
    .then(response =>{
        return response.json()
    } )
    .catch(err =>console.log(err))
}



export const signoutAction = (user)=>{
    return fetch(`${API}/auth/signout`, {
        method : 'POST',
        headers:{
            Accept : 'Application/json',
            'Content-Type': 'Application/json',
        },
        body: JSON.stringify(user)
    })
    .then(response =>{
        return response.json()
    } )
    .catch(err =>console.log(err))
}

// set cookie 

export const setCookie = (key, value)=>{
    if(process.browser){
        cookie.set(key, value, {
            expires: 1              // 1 day
        })
    }
}


export const removeCookie = (key)=>{
    if(process.browser){
        cookie.remove(key, {
            expires: 1              // 1 day
        })
    }
}

// get cookie 

export const getCookie = (key)=>{
    if(process.browser){
        cookie.get(key)
    }
}


// set localstorage


export const setLocalStorage = (key, value) => {
    if (process.browser) {    
        
        localStorage.setItem(key, JSON.stringify(value));
    }
};


// remove localstorage

export const removelocalStorage = (key, value)=>{
    if(process.browser){
       localStorage.removeItem(key)
    }
}


// Authenticate user by pass data to cookie and localstorage
/***middleware */

export const authenticate = (data, next)=>{
    setCookie('token', data.token),
    setLocalStorage('user', data.user)
    next()

}

//

export const isAuth = () =>{
    if(process.browser){
        const cookieChecked = getCookie('token')
        if(cookieChecked){
            if(localStorage.getItem('user')){
                return JSON.parse(localStorage.getItem('user'))
            } else {
                return false
            }
        }

    }
}