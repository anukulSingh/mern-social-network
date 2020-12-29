import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const { name, email, password, password2 } = formData

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value })
    let flag;
    const onSubmit = async e => {
        e.preventDefault()

        if (password !== password2) {
            console.log('Password does not match');
        }
        else {
             console.log(formData)
            // const newUser = {
            //     name,
            //     email,
            //     password,
            //     password
            // }
            // try {
            //     const config = {
            //         headers: {
            //             'Content-Type': 'application/json'
            //         }
            //     }
            //     const body = JSON.stringify(newUser);
            //     const res = await axios.post('/api/users',body,config);
            //     console.log(res.data);
            // } catch (error) {
            //     console.log(error.response.data);
            // }
        }
    }

    return (
        <Fragment>
            <h1 className="large text-primary">
                Sign up
            </h1>
            <p className="lead">
                <i className="fas fa-user">Create your account</i>
            </p>
            <form onSubmit={e => onSubmit(e)}>
                <div class="form-group">
                    {/* <label for="name">Name</label> */}
                    <input type="text" required name="name" class="form-control" id="email" placeholder="Enter your name" value={name} onChange={e => onChange(e)} />
                </div>
                <div class="form-group">
                    {/* <label for="email">Email address</label> */}
                    <input type="email" required name="email" class="form-control" id="email" placeholder="Enter email" value={email} onChange={e => onChange(e)} />
                    <small class="form-text text-muted">This site uses gravatar for profile image</small>
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
                <div class="form-group">
                    {/* <label for="password2">Confirm Password</label> */}
                    <input type="password" name="password2" value={password2} onChange={e => onChange(e)} class="form-control" id="password2" minLength='6' placeholder="Confirm your Password" />
                </div>
                <button type="submit" class="btn btn-outline-primary">Create account</button><br />
                <small class="form-text text-muted">
                    Already have an account..?
                    <Link to="/login">Login</Link>
                </small>
            </form>
            
        </Fragment>
    )
}

export default Register
