import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const Experience = ({ experience }) => {
    const experiences = experience.map(e => (
        <tr key={e._id}>
            <td>{e.company}</td>
            <td className='hise-sm'>{e.title}</td>
            <td>
                <Moment format='YYYY/MM/DD'>{e.from}</Moment> -{' '}
                {e.to === null ? (
                    ' Still there!'
                ) : (
                    <Moment format='YYYY/MM/DD'>{e.to}</Moment>
                )}
            </td>
            <td>
                <button className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    ));

    return (
        <Fragment>
            <h2 class='my-2'>Experience Credentials</h2>
            <table class='table'>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th class='hide-sm'>Title</th>
                        <th class='hide-sm'>Years</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{experiences}</tbody>
            </table>
        </Fragment>
    );
};

Experience.propTypes = {
    experience: PropTypes.array.isRequired
};

export default Experience;
