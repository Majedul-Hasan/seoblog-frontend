import React from "react";



const SignupComponent = () => {

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log('sublitted');
  }

  const handleChange =(e)=>{   

    console.log(e.target.value);
  }





  const signupForm =()=>{
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">        
          <input onChange={handleChange} type="text" className="form-control" placeholder="Type your name" />        
        </div>

        <div className="form-group">        
          <input onChange={handleChange} type="email" className="form-control" placeholder="Type your email" />        
        </div>
        <div className="form-group">        
          <input onChange={handleChange} type="password" className="form-control" placeholder="Type your password" />        
        </div>
        <div >        
          <button className="btn btn-primary">signup</button>        
        </div>





      </form>
    )
  }






  return (
    <React.Fragment>
    
    {signupForm()}
    </React.Fragment>
    



  )
};

export default SignupComponent;