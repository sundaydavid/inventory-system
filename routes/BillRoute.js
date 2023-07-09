const express = require('express')
const { getBillsController, addBillsController} = require('../controllers/BillsController')
const router = express.Router()

//roites
//Method - get
router.get('/get-bills', getBillsController)

router.post('/add-bills',addBillsController)

module.exports = router