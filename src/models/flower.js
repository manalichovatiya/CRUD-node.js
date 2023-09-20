const mongoose = require("mongoose");
const flowerSchema = new mongoose.Schema(
    {
        Flower_name : {
            type : String,
            trim : true ,
        },
        Flower_des : {
            type : String,
            trim : true,
        },
        Flower_color : {
            type : String,
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
const Flower = mongoose.model("Flower" , flowerSchema);
module.exports = Flower;