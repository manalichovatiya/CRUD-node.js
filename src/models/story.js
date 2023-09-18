const mongoose = require("mongoose");
const storySchema = new mongoose.Schema(
    {
        Story_title : {
            type : String,
            trim : true ,
        },
        Story_content : {
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
const Story = mongoose.model("Story" , storySchema);
module.exports = Story;