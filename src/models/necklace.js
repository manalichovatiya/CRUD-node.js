const mongoose = require("mongoose");
const necklaceSchema = new mongoose.Schema(
    {
        Necklace_type : {
            type : String,
            trim : true ,
        },
        Necklace_des : {
            type : String,
            trim : true,
        },
        Necklace_price : {
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
const Necklace = mongoose.model("Necklace" , necklaceSchema);
module.exports = Necklace;