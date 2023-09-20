const mongoose = require("mongoose");
const whatsappSchema = new mongoose.Schema(
    {
        sender_PhoneNumber : {
            type : Number,
            trim : true ,
        },
        recipient_PhoneNumber : {
            type : Number,
            trim : true,
        },
        content : {
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
const Whatsapp = mongoose.model("Whatsapp" , whatsappSchema);
module.exports = Whatsapp;