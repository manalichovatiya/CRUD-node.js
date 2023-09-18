const mongoose = require("mongoose");
const ringSchema = new mongoose.Schema(
    {
        Ring_type : {
            type : String,
            trim : true ,
        },
        Ring_des : {
            type : String,
            trim : true,
        },
        Ring_price : {
            type : Number,
            trim : true,
        },
        is_active : {
            type : Boolean,
            default : true,
        },
},
{
    timestamps : true,
    versionKey : false,
}
);
const Ring = mongoose.model("Ring" , ringSchema);
module.exports = Ring;