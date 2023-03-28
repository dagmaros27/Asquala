const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    catagory:{
    type : [String]
 },
    format: {
        type: String,
    },
},
    { timestamps: true}
)

module.exports = new mongoose.model('Material',materialSchema);