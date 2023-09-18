const mongoose = require("mongoose");
const sareeSchema = new mongoose.Schema(
    {
        Brand : {
            type : String,
            trim : true ,
        },
        Fabric : {
            type : String,
            trim : true,
        },
        Occasion: {
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
const Saree = mongoose.model("Saree" , sareeSchema);
module.exports = Saree;