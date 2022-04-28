import React, { useState, useEffect } from "react";
import { isAuth, signinAction, authenticate } from "../../actions/authAction";
import Router from 'next/router'






const SigninComponent = () => {



  const [values, setValues] = useState({
    
    password: '123456',
    email: 'hasanmajedul@gmail.com',
    error: '',
    loading:false,
    message:'',
    showForm:true

  })

  const {
   
    password,
    email,
    error,
    loading,
    message,
    showForm } = values

     



  const handleSubmit =(e)=>{
    e.preventDefault()
    /*
    console.table({name,
    password,
    email,
    error,
    loading,
    message,
    showForm})*/
    setValues({...values, loading: true, error: false})

    const user = { email, password} 

    

    signinAction(user)
    .then(data=>{
      if(data.error){
         setValues({...values, error: data.error, loading: false})
      }else{
         /*
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    loading: false,
                    message: data.message,
                    showForm: false
                });
                */

                //****** target ****** */


                // save user token to the cookie

                // save user info to the localStorage
                // authenticate user
                authenticate(data, ()=>{
                  //console.log(data);

                  if(isAuth() && isAuth().role === 1 ){
                    Router.push('/admin')
                  } else{
                    Router.push('/user')

                  }


                                   
                    
                })



               
      }
    })
      

  }

  

  const handleChange = name => (e)=>{   

    //console.log(e.target.value);
    setValues({...values, error: false, [name]: e.target.value })
  }

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');



  const signupForm =()=>{
    return (
      <form onSubmit={handleSubmit}>
        

        <div className="form-group">        
          <input value={email} onChange={handleChange('email')} type="email" className="form-control" placeholder="Type your email" />        
        </div>
        <div className="form-group">        
          <input value={password} onChange={handleChange('password')} type="password" className="form-control" placeholder="Type your password" />        
        </div>
        <div >        
          <button className="btn btn-primary">signin</button>        
        </div>





      </form>
    )
  }






  return (
    <React.Fragment>
    {showError()}
    {showLoading()}
    {showMessage()}
    
    {showForm && signupForm()}
    </React.Fragment>
    



  )
};

export default SigninComponent;
