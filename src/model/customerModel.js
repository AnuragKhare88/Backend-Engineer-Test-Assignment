const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
firstName: {
    type:String,
    required: true
},
lastName: {
    type:String,
    required: true
},
mobileNumber: {
    type:String,
    required: true
},
DOB: {
    type: String,
    required:true
},
emailID: {
    type:String,
    required: true
},
address: {
    type:String,
    required: true
},
customerID: {
    type:String,
    required: true
},
status:{
    type: String,
    enum: ["ACTIVE","INACTIVE"]
}
}, {timestamps: true})

module.exports = mongoose.model ('Customer', customerSchema)