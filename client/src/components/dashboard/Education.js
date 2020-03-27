import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const Education = ({ education }) => {
    const educations = education.map(e => (
        <tr key={e._id}>
            <td>{e.school}</td>
            <td className='hise-sm'>{e.degree}</td>
            <td className='hise-sm'>{e.fieldofstudy}</td>
            <td>
                <Moment format='YYYY/MM/DD'>{e.from}</Moment> -{' '}
                {e.to === null ? (
                    ' Still studying there!'
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
            <h2 class='my-2'>Education Credentials</h2>
            <table class='table'>
                <thead>
                    <tr>
                        <th>School</th>
                        <th class='hide-sm'>Degree</th>
                        <th class='hide-sm'>Field of Study</th>
                        <th class='hide-sm'>Years</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{educations}</tbody>
            </table>
        </Fragment>
    );
};

Education.propTypes = {
    education: PropTypes.array.isRequired
};

export default Education;
