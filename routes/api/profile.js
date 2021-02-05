const express = require('express')
const router = express.Router()
const config = require('config')
const request = require('request')

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
        res.json(profile)
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


// @router DELETE api/profile/experience/exp_id
// @desc delete profile experience
// @access private

router.delete('/experience/:exp_id',auth, async (req,res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id })

        // get remove index
        const removeIndex = profile.experience.map(item => item.id).indexOf(req.params.exp_id)
        profile.experience.splice(removeIndex, 1)

        await profile.save()
        res.json(profile)

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server error!')
    }
})

// @router PUT api/profile/education
// @desc add profile education
// @access private
router.put('/education', [auth, [
    check('school', 'School is required').not().isEmpty(),
    check('degree', 'Degree is required').not().isEmpty(),
    check('fieldofstudy', 'Field of Study is required').not().isEmpty(),
    check('from', 'From date is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    const {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
    } = req.body

    const newEdu = {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
    }

    try {
        const profile = await Profile.findOne({ user: req.user.id })

        profile.education.unshift(newEdu)

        await profile.save()

        res.json(profile)
    } catch (error) {
        console.error(error.message || error)
        res.status(500).send('Server error')
    }
})


// @router DELETE api/profile/education/edu_id
// @desc delete profile education
// @access private

router.delete('/education/:edu_id',auth, async (req,res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id })

        // get remove index
        const removeIndex = profile.education.map(item => item.id).indexOf(req.params.edu_id)
        profile.education.splice(removeIndex, 1)

        await profile.save()
        res.json(profile)

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server error!')
    }
})

// @router DELETE api/profile/github/:username
// @desc GET user repos from github
// @access public
router.get('/github/:username',  (req, res) => {
    try {
        const options = {
            uri: `https://api.github.users/${req.params.username}/repos?per_page=5&sort=created:asc&client_id=${config.get('githubClientId')}&client_secret=${config.get('githubSecret')}`,
            method: 'GET',
            headers: {
                'user-agent': 'node.js'
            }
        }
        request(options, (error, response, body) => {
            if (error) console.error(error)

            if (response.statusCode !== 200) {
                res.status(404).json({ msg: 'No github profile found' })
            }

            res.json(JSON.parse(body))
        })
    } catch (error) {
        console.error(error.message || error)
        res.send(500).send('Server error')
    }
})


module.exports = router