import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Signin = () => {
    return (
        <div className="container p-5 h-100">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h1 className="text-center text-info mt-5 display-3">Dashboard Login</h1>
                    <form className="mt-5">
                        <div className="form-group">
                            <label>E-Mail</label>
                            <input className="form-control" type="email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input className="form-control" type="password" />
                        </div>

                        <button className="btn btn-outline-info w-25 mr-3">Login</button>
                        <span>Forgot Password</span>
                        <br />
                        <span className="mt-3">Does not have an account? <Link to="/signup">Create account</Link></span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin
