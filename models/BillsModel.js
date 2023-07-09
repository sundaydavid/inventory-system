const mongoose = require('mongoose')

const BillSchema = mongoose.Schema({
    customerName:{
        type: String,
        required: true
    },
    paymentMode:{
        type: String,
        required: true
    },
    customerNumber:{
        type: Number,
        required: true 
    },
    subTotal:{
        type: Number,
        required: true 
    },
    totalAmount:{
        type: Number,
        required: true 
    },
    tax:{
        type: Number,
        required: true 
    },
    date:{
        type: Date,
        default: Date.now()
    },
    cardItems:{
        type: Array,
        required: true 
    }
},{timestamp: true})

const Bills = mongoose.model('bills', BillSchema)
module.exports = Bills