const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route       POST api/posts
// @desc        Create a post
// @access      Private
router.post(
    '/',
    [
        auth,
        [
            check('text', 'Text is required')
                .not()
                .isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const user = await User.findById(req.user.id).select('-password');

            const newPost = new Post({
                text: req.body.text,
                name: user.name,
                avatar: user.avatar,
                user: req.user.id
            });
            const post = await newPost.save();

            res.json(post);
        } catch (err) {
            console.error(err.message);
            res.status(400).send('Server error.');
        }
    }
);

// @route       GET api/posts
// @desc        Get all posts
// @access      Private
router.get('/', auth, async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 }); //most recent
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error.');
    }
});

// @route       GET api/posts/:post_id
// @desc        Get post by id
// @access      Private
router.get('/:post_id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.post_id);
        if (!post) {
            return res.status(404).json({ msg: 'Post not found.' });
        }
        res.json(post);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post not found.' });
        }
        res.status(500).send('Server error.');
    }
});

// @route       DELETE api/posts/:post_id
// @desc        Delete post by id
// @access      Private
router.delete('/:post_id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.post_id);
        if (!post) {
            return res.status(404).json({ msg: 'Post not found.' });
        }

        // Checking the user
        if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Action not authorized.' });
        }

        await post.remove();
        res.json({ msg: 'Post removed.' });
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(404).json({ msg: 'Post not found.' });
        }
        res.status(500).send('Server error.');
    }
});

module.exports = router;
