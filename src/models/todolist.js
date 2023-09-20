const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema(
    {
        task_name : {
            type : String,
            trim : true ,
        },
        description : {
            type : String,
            trim : true,
        },
        dueDate : {
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
const Todolist = mongoose.model("Todolist" , todoSchema);
module.exports = Todolist;