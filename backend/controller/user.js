const router = require('express').Router();
const bc = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/user');

const { isAuthenticated } = require('../middlewar');

router.get('/', (req, res) => {
    res.send("WELCOME TO DUMMY SERVER");
})

router.post('/signup', async (req, res) => {
    const { name, email, password, dob, ph } = req.body.user;
    try {
        const salt = await bc.genSalt(10);
        const enc_password = await bc.hash(password, salt);
        const user = new User({
            name: name,
            email: email,
            password: enc_password,
            dob: dob,
            contact: ph,
        });
        const saveUser = await user.save();
        if (saveUser) {
            return res.status(200).json({
                id: user._id,
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            error: error,
        })
    }
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body.user;
    console.log(req.body.user)
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({
                error: "Email not Valid",
            })
        }
        const pwd = await bc.compare(password, user.password);
        if (!pwd) return res.status(400).json({ error: "Password not valid" });
        const token = await jwt.sign({ id: user._id }, process.env.SECRET);
        return res.status(200).json({ user: user._id, token: token })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            error: error.message,
        })
    }
})

router.get('/user/:uid', isAuthenticated, async (req, res) => {
    const id = req.params.uid;
    try {
        const user = await User.findById(id).exec();
        if (!user) return res.status(400).json({ error: "No user found !" });
        return res.status(200).json({
            email: user.email,
            dob: user.dob,
            contact: user.contact,
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: error })
    }

})


module.exports = router;