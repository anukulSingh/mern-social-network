import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const { email, password } = formData

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value })
    let flag;
    const onSubmit = async e => {
        e.preventDefault()
             console.log(formData)
        }

    return (
        <Fragment>
            <h1 className="large text-primary">
                Sign in
            </h1>
            <p className="lead">
                <i className="fas fa-user">Sign in your account</i>
            </p>
            <form onSubmit={e => onSubmit(e)}>
                
                <div class="form-group">
                    {/* <label for="email">Email address</label> */}
                    <input type="email" required name="email" class="form-control" id="email" placeholder="Enter email" value={email} onChange={e => onChange(e)} />
                </div>
                <div class="form-group">
                    {/* <label for="password">Password</label> */}
                    <input
                     type="password"
                     name="password"
                     value={password}
                     onChange={e => onChange(e)}
                     class="form-control"
                     id="password"
                     minLength='6'
                     placeholder="Password" />
                </div>
               
                <button type="submit" class="btn btn-outline-primary">Login</button><br />
                <small class="form-text text-muted">
                    Don't have an account..?
                    <Link to="/register">Register</Link>
                </small>
            </form>
            
        </Fragment>
    )
}

export default Login
