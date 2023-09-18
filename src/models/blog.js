const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema(
    {
        Blog_title : {
            type : String,
            trim : true ,
        },
        Blog_des : {
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
const Blog = mongoose.model("Blog" , blogSchema);
module.exports = Blog;