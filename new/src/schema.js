const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const userdetails = new Schema({
    name :{
        type: String,
    },
    mob : {
        type : Number,
    },
    pass:{
        type : String,
    },
    cnfpass:{
        type : String,
    }

})
module.exports=mongoose.model("userdetails", userdetails);
