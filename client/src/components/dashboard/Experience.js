import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';

const Experience = ({ experience, deleteExperience }) => {
    const experiences = experience.map(e => (
        <tr key={e._id}>
            <td>{e.company}</td>
            <td className='hise-sm'>{e.title}</td>
            <td>
                <Moment format='YYYY/MM/DD'>{e.from}</Moment> -{' '}
                {e.to === null ? (
                    ' Still working there!'
                ) : (
                    <Moment format='YYYY/MM/DD'>{e.to}</Moment>
                )}
            </td>
            <td>
                <button
                    onClick={() => deleteExperience(e._id)}
                    className='btn btn-danger'
                >
                    Delete
                </button>
            </td>
        </tr>
    ));

    return (
        <Fragment>
            <h2 className='my-2'>Experience Credentials</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th className='hide-sm'>Title</th>
                        <th className='hide-sm'>Years</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{experiences}</tbody>
            </table>
        </Fragment>
    );
};

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
