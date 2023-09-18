const mongoose = require("mongoose");
const plantnurserySchema = new mongoose.Schema(
    {
        Nursery_name : {
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
const Plantnursery = mongoose.model("Plantnursery" , plantnurserySchema);
module.exports = Plantnursery;