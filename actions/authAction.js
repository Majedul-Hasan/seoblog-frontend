import fetch from 'isomorphic-fetch';
import { API } from '../config';



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