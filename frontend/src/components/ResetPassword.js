import Axios from 'axios'
import React, { useState } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'


const ResetPassword = () => {

    const [state, setState] = useState({
        resetDone: false,
        password: '',
        cPassword: ''
    })

    const { token } = useParams()

    const handleSubmit = (e) => {
        e.preventDefault()
        const { password, cPassword } = state
        if (password === cPassword) {
            Axios.put('http://localhost:8000/api/reset-password', {
                headers: {
                    'Content-Type': 'application/Json',
                },
                token: token,
                password: cPassword
            }).then(res => {
                console.log(res)
                toast('Password Reset')
                setState({
                    resetDone: true,
                    password: '',
                    cPassword: ''
                })
            }).catch(err => {
                console.log(err)
                toast('Error while reseting password')
                setState({
                    resetDone: false,
                    password: '',
                    cPassword: ''
                })
            })
        } else {
            toast('Password Does not match')
            setState({
                resetDone: false,
                password: '',
                cPassword: ''
            })
        }

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 p-5 m-auto">
                    <h1 className="text-center display-3 text-info">Reset Password</h1>
                    {state.resetDone ? (
                        <Redirect to='/' />
                    ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input className="form-control" type="password" value={state.password} required onChange={(e) => setState({
                                        ...state,
                                        password: e.target.value
                                    })} /><br />
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input className="form-control" type="password" value={state.cPassword} required onChange={(e) => setState({
                                        ...state,
                                        cPassword: e.target.value
                                    })} /><br />
                                </div>
                                <button className="btn btn-outline-success w-25 p-2 m-1">Reset</button>
                            </form>
                        )
                    }
                </div >
            </div >
        </div >)
}

export default ResetPassword
