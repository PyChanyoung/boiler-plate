const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subcriberSchema = mongoose.Schema({
    userTo:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    userFrom:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
},{ timestamps:true })


const Subscriber = mongoose.model('Subscriber', subcriberSchema)

module.exports = { Subscriber }