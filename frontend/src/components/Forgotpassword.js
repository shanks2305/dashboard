import Axios from 'axios'
import React, { useState } from 'react'
import API from '../api'
import { Redirect } from 'react-router-dom'

const Forgotpassword = () => {

    const [state, setState] = useState({
        email: '',
        emailSend: false
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const em = state.email
        Axios.post(`${API}/api/forgot-password`,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                email: em
            })
            .catch(err => {
                console.log(err)
                setState({
                    email: '',
                    emailSend: false
                })
            })
        setState({
            email: '',
            emailSend: true
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 p-5 m-auto">
                    <h1 className="text-center display-3 text-info">Forgot Password</h1>
                    {state.emailSend ? (
                        <Redirect to='/' />
                    ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input className="form-control" type="email" value={state.email} required onChange={(e) => setState({
                                        ...state,
                                        email: e.target.value
                                    })} /><br />
                                    <button className="btn btn-outline-success w-25 p-2 m-1">Send</button>
                                </div>
                            </form>
                        )
                    }
                </div >
            </div >
        </div >
    )
}

export default Forgotpassword
