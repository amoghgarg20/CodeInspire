import React from 'react'

const LoginIn = () => {
    return (
        <div>
            <h1></h1>
    <div className="signup">
        <h2 >LOGIN</h2>
        <form action="Login_PHP.php" method="post">
            <div className="row mb-3">
              <label htmlFor="inputEmail3"  className="col-sm-2 col-form-label">Username</label>
              <div className="col-sm-10">
                <input type="text" name="Username" className="form-control" id="inputEmail3"/>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputPassword3"  className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" name="Password" className="form-control" id="inputPassword3"/>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>    
    </div>
</div>
    )
}

export default LoginIn
