const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

const auth = require('../../middleware/auth')
const User = require('../../models/User')
const Profile = require('../../models/Profile')
const Post = require('../../models/Posts')



// @ route  POST api/posts
// @desc creates a post
// @access private

router.post('/',
[auth, [
    check('text', 'Text is required').not().isEmpty()
]],
async (req,res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        
        const user = await User.findById(req.user.id).select('-password -tokens')

        const newPost = new Post({
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        })

        const post = await newPost.save()
        res.json(post)

    } catch (error) {
        console.error(error.message || error)
        res.status(500).send('Server error')
    }
    
} )

// @ route  GET api/posts
// @desc GET all posts
// @access private

router.get('/', auth, async (req, res) => {
    try {
        
        const posts = await Post.find().sort({ date: -1 }) //sort posts from most recent
        res.json(posts)

    } catch (error) {
        console.error(error.message || error)
        res.status(500).send('Server error')
    }
})

// @ route  GET api/posts/:id
// @desc GET post by id
// @access private
router.get('/:id', auth, async (req, res) => {
    try {
        
        const post = await Post.findById(req.params.id)
        if (!post) {
            return res.status(404).send('Post not found')
        }

        res.json(post)

    } catch (error) {
        console.error(error.message || error)
        if (error.kind === 'ObjectId') {
            return res.status(404).send('Post not found')
        }
        res.status(500).send('Server error')
    }
})

// @ route  DELETE api/posts/:id
// @desc Delete a post
// @access private

router.delete('/:id', auth, async (req, res) => {
    try {
        
        const post = await Post.findById(req.params.id)

        if (!post) {
            return res.status(404).send('Post not found')
        }

        //check user
        if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' })
        }
        await post.remove()
        res.json({ msg: 'Post removed' })
        res.json(posts)

    } catch (error) {
        console.error(error.message || error)
        if (error.kind === 'ObjectId') {
            return res.status(404).send('Post not found')
        }
        res.status(500).send('Server error')
    }
})
// @ route  PUT api/posts/like/:id
// @desc likes a post
// @access private
router.put('/like/:id', auth, async (req, res) => {
    try {
        
        const post = await Post.findById(req.params.id)

        //check if post has already been liked
        if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            return res.status(400).json('Post already liked')
        }

        post.likes.unshift({ user: req.user.id })
        await post.save()
        res.json(post.likes)

    } catch (error) {
        console.error(error.message || error)
        res.status(500).send('Server error')
    }
})

// @ route  PUT api/posts/unlike/:id
// @desc likes a post
// @access private
router.put('/unlike/:id', auth, async (req, res) => {
    try {
        
        const post = await Post.findById(req.params.id)

        //check if post has already been liked
        if (post.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
            return res.status(400).json('Post has not been liked yet')
        }

       //Get reomove index
       const removeIndex = post.likes.map(like => like.user.toString()).indexOf(req.user.id)

       post.likes.splice(removeIndex, 1)
        await post.save()
        res.json(post.likes)

    } catch (error) {
        console.error(error.message || error)
        res.status(500).send('Server error')
    }
})

// @ route  POST api/posts/comment/:id
// @desc comment on a post
// @access private

router.post('/comment/:id',
[auth, [
    check('text', 'Text is required').not().isEmpty()
]],
async (req,res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        
        const user = await User.findById(req.user.id).select('-password -tokens')
        const post = await Post.findById(req.params.id)

        
        const newComment = {
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        }
        console.log(post);
        post.comments.unshift(newComment)

        await post.save()
        res.json(post.comments)

    } catch (error) {
        console.error(error)
        res.status(500).send('Server error')
    }
    
} )

// @route DELETE api/posts/comment/:id/comment_id
// @desc deletes a comment
// @access private
router.delete('/comment/:id/:comment_id', auth, async (req, res) => {

    try {
        
        const post = await Post.findById(req.params.id)

        //pull out comments
        const comment = post.comments.find(comment => comment.id === req.params.comment_id)

        //check if comment exist
        if (!comment) {
            return res.status(404).json({ msg: 'Comment does not exist' })
        }
        // check user as one can delete her/his own comment
        if (comment.user.toString() != req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' })
        }
        //Get reomove index
       const removeIndex = post.comments.map(comment => comment.user.toString()).indexOf(req.user.id)

       post.comments.splice(removeIndex, 1)
        await post.save()
        res.json(post.comments)

    } catch (error) {
        console.error(error.message || error)
        res.status(500).send('Server error')
    }
})



module.exports = router