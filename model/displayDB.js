const mongoose = require('mongoose')

const displaydb = new mongoose.Schema({
    income:{
        type:String,
        require:true,
    },
    expense:{
        type:String,
        require:true,
    },
    investment:{
        type:String,
        require:true,
    },
},{ timestamps: true });

const fileExport = mongoose.model("displayDb",displaydb)

module.exports = fileExport;