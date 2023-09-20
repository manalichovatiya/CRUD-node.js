const mongoose = require("mongoose");
const pencilSchema = new mongoose.Schema(
    {
        brand : {
            type : String,
            trim : true ,
        },
        Pencil_des : {
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
const Pencil = mongoose.model("Pencil" , pencilSchema);
module.exports = Pencil;