const mongoose = require("mongoose");
const servantSchema = new mongoose.Schema(
    {
        Servant_name : {
            type : String,
            trim : true ,
        },
        Servant_gender : {
            type : String,
            trim : true,
        },
        Salary : {
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
const Servant = mongoose.model("Servant" , servantSchema);
module.exports = Servant;