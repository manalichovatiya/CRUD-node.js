const mongoose = require("mongoose");
const cycleSchema = new mongoose.Schema(
    {
        brand : {
            type : String,
            trim : true ,
        },
        cycle_des : {
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
const Cycle = mongoose.model("Cycle" , cycleSchema);
module.exports = Cycle;