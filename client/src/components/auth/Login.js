import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
    // useState Hook
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // Destructuring
    const { email, password } = formData;

    // onChange handler
    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    // onChange handler
    const onSubmit = async e => {
        e.preventDefault();
        console.log('User Logged in.');
    };

    return (
        <Fragment>
            <section className='container'>
                <h1 className='large text-primary'>Sign In</h1>
                <p className='lead'>
                    <i className='fas fa-user'></i> Sign Into Your Account
                </p>
                <form className='form' onSubmit={e => onSubmit(e)}>
                    <div className='form-group'>
                        <input
                            type='email'
                            placeholder='Email Address'
                            name='email'
                            value={email}
                            onChange={e => onChange(e)}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            placeholder='Password'
                            name='password'
                            value={password}
                            onChange={e => onChange(e)}
                            minLength='6'
                        />
                    </div>
                    <input
                        type='submit'
                        className='btn btn-primary'
                        value='Login'
                    />
                </form>
                <p className='my-1'>
                    Don't have an account?
                    <Link to='/register'> Sign Up</Link>
                </p>
            </section>
        </Fragment>
    );
};

export default Login;
