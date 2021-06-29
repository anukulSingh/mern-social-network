import { connect } from 'react-redux';
import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { login } from '../../actions/auth'


const Login = ({ login,isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const { email, password } = formData

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value })
    const onSubmit = async e => {
        e.preventDefault()
        login(email, password)
        }

        // redirect if logged in
    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
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

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
  });

export default connect(mapStateToProps, {login})(Login)
