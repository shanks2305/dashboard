import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className="container p-1 h-100">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h1 className="text-center text-info mt-2 display-3">New Account Creation</h1>
                    <form className="mt-2">
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" type="text" />
                        </div>

                        <div className="form-group">
                            <label>E-Mail</label>
                            <input className="form-control" type="email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input className="form-control" type="password" />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input className="form-control" type="password" />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label>Date of Birth</label>
                            <input className="form-control" type="date" />
                        </div>

                        <button className="btn btn-outline-info w-25 mr-3">Create</button>

                        <br />
                        <span className="mt-3">Already have an account? <Link to="/signin">Login</Link></span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
