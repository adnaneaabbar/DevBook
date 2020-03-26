import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

const AddExperience = ({ addExperience, history }) => {
    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const {
        company,
        title,
        location,
        from,
        to,
        current,
        description
    } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        addExperience(formData, history);
    };

    return (
        <Fragment>
            <h1 class='large text-primary'>Add Your Experience</h1>
            <p class='lead'>
                <i class='fas fa-code-branch'></i> Add any developer/programming
                positions that you have had in the past
            </p>
            <small>
                <span className='star'>*</span> = required field
            </small>
            <form class='form' onSubmit={e => onSubmit(e)}>
                <div class='form-group'>
                    <input
                        type='text'
                        placeholder='* Job Title'
                        name='title'
                        value={title}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div class='form-group'>
                    <input
                        type='text'
                        placeholder='* Company'
                        name='company'
                        value={company}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div class='form-group'>
                    <input
                        type='text'
                        placeholder='Location'
                        name='location'
                        value={location}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div class='form-group'>
                    <h4>From Date</h4>
                    <input
                        type='date'
                        name='from'
                        value={from}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div class='form-group'>
                    <p>
                        <input
                            type='checkbox'
                            name='current'
                            checked={current}
                            value={current}
                            onChange={e => {
                                setFormData({ ...formData, current: !current });
                                toggleDisabled(!toDateDisabled);
                            }}
                        />{' '}
                        Current Job
                    </p>
                </div>
                <div class='form-group'>
                    <h4>To Date</h4>
                    <input
                        type='date'
                        name='to'
                        value={to}
                        onChange={e => onChange(e)}
                        disabled={toDateDisabled ? 'disabled' : ''}
                    />
                </div>
                <div class='form-group'>
                    <textarea
                        name='description'
                        value={description}
                        onChange={e => onChange(e)}
                        cols='30'
                        rows='5'
                        placeholder='Job Description'
                    ></textarea>
                </div>
                <input type='submit' class='btn btn-primary my-1' />
                <Link class='btn btn-light my-1' to='/dashboard'>
                    Go Back
                </Link>
            </form>
        </Fragment>
    );
};

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired
};

export default connect(null, { addExperience })(withRouter(AddExperience));
