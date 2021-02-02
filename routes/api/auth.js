const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth')
const User = require('../../models/User')

const { check, validationResult } = require('express-validator')

// @route GET api/auth
// @desc show my profile
// @access private
router.get('/',auth, async (req,res) => {
    try {
        const user = await User.findById(req.user.id).select("-password -tokens")
        
        res.json(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server error!')
    }
})

// @route  POST api/auth
// @desc   authenticate user and get token
// @access  public
router.post('/', [
   
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').exists()

], async (req,res) => { 
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //either user doesnt match or password doesnt , display same message (web security)
    //destructuring req.body.email and password
    const { email,password } = req.body;
    //see if user exists
    try{
       let user = await User.findOne({ email }); //findoone returns a promise

       if(!user) {
           return res
           .status(400)
           .json({ errors: [{ msg: 'Invalid Credentials'}] })
       }
       //comapres plain text 'password' to decrypted 'user.password'
       const isMatch = await bcrypt.compare(password,user.password);

       if(!isMatch) {
            return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentials'}] }) 
       }
     
    //return jsonwebtoken

     const payload = {
         user: {
             id: user.id
         }
     }

     const token = jwt.sign(payload, config.get('jwtSecret'),{ expiresIn: 360000 }) 
     user.tokens = user.tokens.concat({ token })
     await user.save()
     res.send({ token })
    }  catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
   
    
    
});

module.exports = router