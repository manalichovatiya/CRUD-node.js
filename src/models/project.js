const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema(
    {
        project_name : {
            type : String,
            trim : true ,
        },
        project_des : {
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
const Project = mongoose.model("Project" , projectSchema);
module.exports = Project;