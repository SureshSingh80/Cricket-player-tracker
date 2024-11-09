import mongoose from "mongoose";

const playerSchema=new mongoose.Schema({
    name:{
        type:String,
        // required:true,
    },
    age:{
        type:String,
        // required:true
    },
    nationality:{
        type:String,
        // required:true
    },
    gender:{
        type:String,
        // required:true
    },
    role:{
        type:String,
        // required:true
    },
    battingOrder:{
        type:String,
        // required:true
    },
    battingStyle:{
        type:String,
        // required:true
    },
    image:{
        type:String,
        // required:true
    },
    contactNo:{
        type:String,
        // required:true
    }

});

const Players=mongoose.models.Players || mongoose.model("Players",playerSchema);
export default Players;