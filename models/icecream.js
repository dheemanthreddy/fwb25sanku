const mongoose = require("mongoose")
const FanSchema = mongoose.Schema({

icecream_type:{
    type: String,
    minLength: 3,
    maxLength: 100
},

quantity: {
    type:Number,
},

cost: {
    type:Number,
    min:1,
    max:500
}
})
module.exports = mongoose.model("icecream",FanSchema)