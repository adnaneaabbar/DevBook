import React from 'react';
import { Link } from 'react-router-dom';

export const Landing = () => {
    return (
        <section className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                    <h1 className='x-large'>Developer book</h1>
                    <p className='lead'>
                        Create a developer profile, share posts and connect with
                        other developers.
                    </p>
                    <div className='buttons'>
                        <Link to='/register' className='btn btn-primary'>
                            Sign Up
                        </Link>
                        <Link to='/login' className='btn btn-light'>
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
