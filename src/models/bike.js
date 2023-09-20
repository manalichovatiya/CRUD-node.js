const mongoose = require("mongoose");
const bikeSchema = new mongoose.Schema(
    {
        brand_Name : {
            type : String,
            trim : true ,
        },
        bike_des : {
            type : String,
            trim : true,
        },
        price : {
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
const Bike = mongoose.model("Bike" , bikeSchema);
module.exports = Bike;