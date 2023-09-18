const mongoose = require("mongoose");
const farmSchema = new mongoose.Schema(
    {
        Farm_name : {
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
const Farm = mongoose.model("Farm" , farmSchema);
module.exports = Farm;