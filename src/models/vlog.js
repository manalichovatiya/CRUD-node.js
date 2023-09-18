const mongoose = require("mongoose");
const vlogSchema = new mongoose.Schema(
    {
        Vlog_title : {
            type : String,
            trim : true ,
        },
        Vlog_content : {
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
const Vlog = mongoose.model("Vlog" , vlogSchema);
module.exports = Vlog;