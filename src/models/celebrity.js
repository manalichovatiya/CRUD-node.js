const mongoose = require("mongoose");
const celebritySchema = new mongoose.Schema(
    {
        Celebrity_name : {
            type : String,
            trim : true ,
        },
        Celebrity_birthdate : {
            type : String,
            trim : true,
        },
        Celebrity_nationality : {
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
const Celebrity = mongoose.model("Celebrity" , celebritySchema);
module.exports = Celebrity;