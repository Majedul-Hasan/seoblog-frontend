import React, { useEffect } from 'react';
import Router from 'next/router'
import { isAuth } from '../../actions/authAction';




const PrivateAuthComponent = ({children}) =>{

    useEffect(()=>{

        if(!isAuth()){
            Router.push(`/signin`)

        }
    },[])


    return(
        <React.Fragment>{children}
        
        </React.Fragment>
    )

}


export default PrivateAuthComponent