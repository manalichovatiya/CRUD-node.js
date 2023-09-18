const mongoose = require("mongoose");
const carSchema = new mongoose.Schema(
    {
        Car_name : {
            type : String,
            trim : true ,
        },
        Car_des : {
            type : String,
            trim : true,
        },
        Price : {
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
const Car = mongoose.model("Car" , carSchema);
module.exports = Car;