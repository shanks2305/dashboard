import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUpUser } from '../redux/action'
import { toast } from 'react-toastify'
import LoadingScreen from './LoadingScreen'
import PropTypes from 'prop-types'

const Signup = ({ signUp, creatingUser }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        cPassword: "",
        contact: "",
        dob: ""
    })

    const handleChange = (e, f) => {
        setFormData({
            ...formData,
            [f]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, cPassword, password, contact, dob } = formData;
        if (password === cPassword) {
            signUp({
                name, email, password, contact, dob
            })
        } else {
            toast('Confirm password does not match',
                {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                })
            return
        }
        setFormData({
            name: "",
            email: "",
            password: "",
            cPassword: "",
            contact: "",
            dob: ""
        })
    }

    return creatingUser ? (
        <LoadingScreen />
    ) : (
            <div className="container p-1 h-100">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h1 className="text-center text-info mt-2 display-3">New Account Creation</h1 >
                        <form className="mt-2" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input className="form-control" type="text" required value={formData.name} onChange={(e) => handleChange(e, 'name')} />
                            </div>

                            <div className="form-group">
                                <label>E-Mail</label>
                                <input className="form-control" type="email" required value={formData.email} onChange={(e) => handleChange(e, 'email')} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input className="form-control" type="password" required value={formData.password} onChange={(e) => handleChange(e, 'password')} />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input className="form-control" type="password" required value={formData.cPassword} onChange={(e) => handleChange(e, 'cPassword')} />
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input className="form-control" type="text" required value={formData.contact} onChange={(e) => handleChange(e, 'contact')} />
                            </div>
                            <div className="form-group">
                                <label>Date of Birth</label>
                                <input className="form-control" type="date" required value={formData.dob} onChange={(e) => handleChange(e, 'dob')} />
                            </div>


                            <button className="btn btn-outline-info w-25 mr-3">Create</button>

                            <br />
                            <span className="mt-3">Already have an account? <Link to="/signin">Login</Link></span>
                        </form>
                    </div >
                </div >
            </div >
        )
}

const mapDispatchToProps = (dispatch) => ({
    signUp: (user) => dispatch(signUpUser(user))
})

const mapStateToProps = (state) => ({
    creatingUser: state.creatingUser
})

Signup.propTypes = {
    creatingUser: PropTypes.bool,
    signUp: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
