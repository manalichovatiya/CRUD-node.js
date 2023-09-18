const mongoose = require("mongoose");
const watchSchema = new mongoose.Schema(
    {
        Brand : {
            type : String,
            trim : true ,
        },
        Model : {
            type : String,
            trim : true,
        },
        Style: {
            type: String,
            trim: true,
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
const Watch = mongoose.model("Watch" , watchSchema);
module.exports = Watch;