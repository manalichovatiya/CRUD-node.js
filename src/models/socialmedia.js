const mongoose = require("mongoose");
const socialmediaSchema = new mongoose.Schema(
    {
        user : {
            type : String,
            trim : true ,
        },
        content : {
            type : String,
            trim : true,
        },
        createdAt : {  //date
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
const Socialmedia = mongoose.model("Socialmedia" , socialmediaSchema);
module.exports = Socialmedia;