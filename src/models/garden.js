const mongoose = require("mongoose");
const gardenSchema = new mongoose.Schema(
    {
        Garden_name : {
            type : String,
            trim : true ,
        },
        Location : {
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
const Garden = mongoose.model("Garden" , gardenSchema);
module.exports = Garden;