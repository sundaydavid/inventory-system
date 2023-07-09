const express = require('express')
const { loginController, registerController} = require('../controllers/Usercontroller')
const router = express.Router()

//roites
//Method - get
router.post('/login', loginController)

router.post('/register',registerController)

module.exports = router