import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
    const [text, setText] = useState('');

    return (
        <div>
            <div class='post-form'>
                <div class='bg-primary p'>
                    <h3>
                        Any questions you want to ask or information you want to
                        share ?{' '}
                    </h3>
                </div>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        addPost({ text });
                        setText('');
                    }}
                    class='form my-1'
                >
                    <textarea
                        name='text'
                        value={text}
                        onChange={e => setText(e.target.value)}
                        cols='30'
                        rows='5'
                        placeholder='Your text goes here..'
                        required
                    ></textarea>
                    <input
                        type='submit'
                        class='btn btn-dark my-1'
                        value='Submit'
                    />
                </form>
            </div>
        </div>
    );
};

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
