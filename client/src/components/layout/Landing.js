import React from 'react';

export const Landing = () => {
    return (
        <section className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                    <h1 className='x-large'>Developer book</h1>
                    <p className='lead'>
                        Create a developer profile, share posts and connect with
                        other developers
                    </p>
                    <div className='buttons'>
                        <a href='register.html' className='btn btn-primary'>
                            Sign Up
                        </a>
                        <a href='login.html' className='btn btn-light'>
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
