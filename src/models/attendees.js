const mongoose = require("mongoose");
const attendeesSchema = new mongoose.Schema(
    {
        first_Name : {
            type : String,
            trim : true ,
        },
        last_Name : {
            type : String,
            trim : true,
        },
        roll_number : {
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
const Attendees = mongoose.model("Attendees" , attendeesSchema);
module.exports = Attendees;