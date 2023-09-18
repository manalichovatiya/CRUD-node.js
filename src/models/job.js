const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema(
    {
        Job_title : {
            type : String,
            trim : true ,
        },
        Company : {
            type : String,
            trim : true,
        },
        Location : {
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
const Job = mongoose.model("Job" , jobSchema);
module.exports = Job;