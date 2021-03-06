import React, { useState, useEffect } from "react";
import { signupAction, isAuth } from "../../actions/authAction";

import Router from 'next/router'



const SignupComponent = () => {
  const [values, setValues] = useState({
    name: 'Majedul Hasan',
    password: '123456',
    email: 'hasanmajedul@gmail.com',
    error: '',
    loading:false,
    message:'',
    showForm:true

  })

  const {
    name,
    password,
    email,
    error,
    loading,
    message,
    showForm } = values

    useEffect(()=>{
      isAuth() && Router.push(`/signin`)

    },[isAuth])



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

    const user = {name, email, password} 

    signupAction(user)
    .then(data=>{
      if(data.error){
         setValues({...values, error: data.error, loading: false})
      }else{
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
      }
    })
      

  }

  const handleChange = name => (e)=>{   

    console.log(e.target.value);
    setValues({...values, error: false, [name]: e.target.value })
  }

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');



  const signupForm =()=>{
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">        
          <input value={name} onChange={handleChange('name')} type="text" className="form-control" placeholder="Type your name" />        
        </div>

        <div className="form-group">        
          <input value={email} onChange={handleChange('email')} type="email" className="form-control" placeholder="Type your email" />        
        </div>
        <div className="form-group">        
          <input value={password} onChange={handleChange('password')} type="password" className="form-control" placeholder="Type your password" />        
        </div>
        <div >        
          <button className="btn btn-primary">signup</button>        
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

export default SignupComponent;
