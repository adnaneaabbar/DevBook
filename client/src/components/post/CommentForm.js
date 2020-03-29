import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment }) => {
    const [text, setText] = useState('');

    return (
        <div className='post-form'>
            <div className='bg-primary p'>
                <h3>Leave your comment below !</h3>
            </div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    addComment(postId, { text });
                    setText('');
                }}
                className='form my-1'
            >
                <textarea
                    name='text'
                    value={text}
                    onChange={e => setText(e.target.value)}
                    cols='25'
                    rows='4'
                    placeholder='Your text goes here..'
                    required
                ></textarea>
                <input
                    type='submit'
                    className='btn btn-dark my-1'
                    value='Submit'
                />
            </form>
        </div>
    );
};

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired
};

export default connect(null, { addComment })(CommentForm);
