import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
    // useState Hook
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    // Destructuring
    const { name, email, password, password2 } = formData;

    // onChange handler
    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    // onChange handler
    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            console.log('Passwords do not match.');
        } else {
            console.log('User registered.');
        }
    };

    return (
        <Fragment>
            <section className='container'>
                <h1 className='large text-primary'>Sign Up</h1>
                <p className='lead'>
                    <i className='fas fa-user'></i> Create Your Account
                </p>
                <form className='form' onSubmit={e => onSubmit(e)}>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Name'
                            name='name'
                            value={name}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='email'
                            placeholder='Email Address'
                            name='email'
                            value={email}
                            onChange={e => onChange(e)}
                        />
                        <small className='form-text'>
                            This site uses Gravatar so if you want a profile
                            image, use a Gravatar email
                        </small>
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
                    <div className='form-group'>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            name='password2'
                            value={password2}
                            onChange={e => onChange(e)}
                            minLength='6'
                        />
                    </div>
                    <input
                        type='submit'
                        className='btn btn-primary'
                        value='Register'
                    />
                </form>
                <p className='my-1'>
                    Already have an account? <Link to='/login'>Sign In</Link>
                </p>
            </section>
        </Fragment>
    );
};

export default Register;
