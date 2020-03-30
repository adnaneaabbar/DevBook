import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
    deleteComment,
    postId,
    comment: { _id, text, name, avatar, user, date },
    auth
}) => {
    return (
        <div className='post bg-white p-1 my-1'>
            <div>
                <Link to={`/profile/${user}`}>
                    <img className='round-img' src={avatar} alt='' />
                    <h4>{name}</h4>
                </Link>
            </div>
            <div>
                <p className='my-1'>{text}</p>
                <p className='post-date'>
                    <Moment format='YYYY/MM/DD'>{date}</Moment>
                </p>
                {!auth.loading && user === auth.user._id && (
                    <button
                        onClick={e => deleteComment(postId, _id)}
                        type='button'
                        class='btn btn-danger'
                    >
                        <i class='fas fa-times'></i>
                    </button>
                )}
            </div>
        </div>
    );
};

CommentItem.propTypes = {
    deleteComment: PropTypes.func.isRequired,
    postId: PropTypes.number.isRequired,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
