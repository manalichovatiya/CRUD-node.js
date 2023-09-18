const mongoose = require("mongoose");
const foodSchema = new mongoose.Schema(
    {
        Food_name : {
            type : String,
            trim : true ,
        },
        Food_des : {
            type : String,
            trim : true,
        },
        Food_price : {
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
const Food = mongoose.model("Food" , foodSchema);
module.exports = Food;