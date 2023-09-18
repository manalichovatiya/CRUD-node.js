const mongoose = require("mongoose");
const jeansSchema = new mongoose.Schema(
    {
        Brand_name : {
            type : String,
            trim : true ,
        },
        Style : {
            type : String,
            trim : true,
        },
        Color : {
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
const Jeans = mongoose.model("Jeans" , jeansSchema);
module.exports = Jeans;