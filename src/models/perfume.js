const mongoose = require("mongoose");
const perfumeSchema = new mongoose.Schema(
    {
        Brand : {
            type : String,
            trim : true ,
        },
        Name: {
            type: String,
            trim: true,
        },
        Scent : {
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
const  Perfume = mongoose.model("Perfume" , perfumeSchema);
module.exports = Perfume ;