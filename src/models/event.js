const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema(
    {
        Event_type : {
            type : String,
            trim : true,
        },
        Event_date : {
            type : String,
            trim : true,
        },
        Event_location : {
            type : String,
            trim : true,
        },
        Event_description : {
            type : String,
            trim : true,
        },
        is_active  :  {
            type  :  Boolean,
            default  :  true,
        },
},
{
    timestamps : true,
    versionKey : false,
}
);
const Event = mongoose.model("Event" , eventSchema);
module.exports = Event;