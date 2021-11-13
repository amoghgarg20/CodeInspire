import React from 'react'

const SignUp = () => {
    return (
        <div id ="#signup">
    <div className="signup">
        <h2>SIGN-UP</h2>
        <form action="#Registration" method="post">
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input type="text" name="Name" className="form-control" required/>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Username</label>
              <div className="col-sm-10">
                <input type="text" name="Username" className="form-control" id="inputEmail3" required/>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" name="Password" className="form-control" id="inputPassword3" required/>
              </div>
            </div>
            <div className="row mb-3">
              <label  htmlFor="inputPassword3" className="col-sm-2 col-form-label">Confirm Password</label>
              <div className="col-sm-10">
                <input type="password" name="CPassword" className="form-control" id="inputPassword3" required/>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign-Up</button>
        </form>    
    </div>
    <div className="redirect">
        Already have an account?
        <a href="Login.html"> Login</a>
    </div>
        </div>
    )
}

export default SignUp
