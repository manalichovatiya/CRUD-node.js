const mongoose = require("mongoose");
const foowearSchema = new mongoose.Schema(
    {
        Footwear_type : {
            type : String,
            trim : true ,
        },
        Footwear_des : {
            type : String,
            trim : true,
        },
        Footwear_price : {
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
const Footwear = mongoose.model("Footwear" , foowearSchema);
module.exports = Footwear;