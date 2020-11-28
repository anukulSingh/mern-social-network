const express = require('express')
const router = express.Router()

const auth = require('../../middleware/auth')
const Profile = require('../../models/Profile')
const User = require('../../models/User')
const { check, validationResult } = require('express-validator')

// @route GET api/profile/me
// @desc get current user profiles
// @access private
router.get('/me',auth,async (req,res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user',['name','avatar'])

        if (!profile) {
            return res.status(400).json({ msg: 'No profile for this user' })
        }
    } catch (error) {
        console.error(error.message || error);
        res.status(500).send('Server error !')
    }
})
//@ route create user profile
//@desc create or update user profile
//@accesss private
router.post('/', 
    [auth, 
    [ check('status', 'Status is required').not().isEmpty(),
      check('skills','Skills is required').not().isEmpty()
 ]
],
    async(req,res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const {
            company,
            website,
            location,
            bio,
            status,
            githubusername,
            skills,
            youtube,
            facebook,
            twitter,
            instagram,
            linkedin
        } = req.body

        //build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (company) profileFields.company = company
    if (website) profileFields.website = website
    if (location) profileFields.location = Location
    if (bio) profileFields.bio = bio
    if (status) profileFields.status = status
    if (githubusername) profileFields.githubusername = githubusername
    if (skills) {
        profileFields.skills = skills.split(',').map(skill => skill.trim())
    }
    
    //build social object
    profileFields.social = {}
    if (youtube) profileFields.social.youtube = youtube
    if (twitter) profileFields.social.twitter = twitter
    if (facebook) profileFields.social.facebook = facebook
    if (linkedin) profileFields.social.linkedin = linkedin
    if (instagram) profileFields.social.instagram = instagram

    try {
        
        let profile = await Profile.findOne({ user: req.user.id })

        //update any changes
        if (profile) {
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
                );

                return res.json(profile)
        }

        //if no profile then create one
        profile = new Profile(profileFields)
        await profile.save()
        res.json(profile)
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error !')
    }
})

// @router GET api/profile
// @desc get all user profiles
// @access public
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user',['name','avatar'])
        res.json(profiles)
    } catch (error) {
        console.error(error.message || error)
        res.status(500).send('Server error!')
    }
})

// @router GET all profiles/user/:userid
// @desc get user profile by id
// @access public
router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.find({ user: req.params.user_id }).populate('user',['name','avatar'])
        
        if (!profile) return res.status(400).json({ msg: 'Profile not found'})
        
        res.json(profile)
    } catch (error) {
        console.error(error.message || error)
        if (error.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Profile not found'})
        }
        res.status(500).send('Server error!')
    }
})

// @router Delete api/profile
// @desc delete user profile,user,posts
// @access private
router.delete('/',auth, async (req, res) => {
    try {
        //Deleting my profile
        await Profile.findOneAndDelete({ user: req.user.id })
        await User.findOneAndDelete({ _id: req.user.id })
        res.json({ msg: 'User removed' })
    } catch (error) {
        console.error(error.message || error)
        res.status(500).send('Server error!')
    }
})

// @router PUT api/profile/experience
// @desc add profile experience
// @access private
router.put('/experience', [auth, [
    check('title', 'Title is required').not().isEmpty(),
    check('company', 'Company is required').not().isEmpty(),
    check('from', 'From date is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    const {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    } = req.body

    const newExp = {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    }

    try {
        const profile = await Profile.findOne({ user: req.user.id })

        profile.experience.unshift(newExp)

        await profile.save()

        res.json(profile)
    } catch (error) {
        console.error(console.error(error.message))
        res.status(500).send('Server error')
    }
})

module.exports = router