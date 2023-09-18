const mongoose = require("mongoose");
const gameSchema = new mongoose.Schema(
    {
        Game_name : {
            type : String,
            trim : true ,
        },
        Game_des : {
            type : String,
            trim : true,
        },
        Players : {
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
const Game = mongoose.model("Game" , gameSchema);
module.exports = Game;