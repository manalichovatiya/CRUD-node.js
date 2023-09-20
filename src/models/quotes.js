const mongoose = require("mongoose");
const quoteSchema = new mongoose.Schema(
    {
        text : {
            type : String,
            trim : true ,
        },
        author : {
            type : String,
            trim : true,
        },
        category : {
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
const Quotes = mongoose.model("Quotes" , quoteSchema);
module.exports = Quotes;