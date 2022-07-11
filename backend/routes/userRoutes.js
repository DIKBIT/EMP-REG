const express = require('express')
const { registerUser, authUser, updateUserProfile } = require('../controllers/userControllers')
const { protect } = require ("../middlewares/authMiddleware")

const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(authUser)


module.exports = router





































































// const express = require ('express');
// const {registerUser, authUser}  = require('../controllers/userControllers');

// const router = express.Router()

// router.route('/').post(registerUser)
// router.route('/login').post(authUser)

// module.exports =router;