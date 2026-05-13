import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    phone:{
         type : String,
        required : true,
        unique : true
    },
    password:{
         type : String,
        required : true,    
    },
    isAdmin:{
         type : String,
        required : true,
        default : false
    },
    credits:{
         type : String,
        required : true,
        default : 5                  //user ko 5 credit diye 
    }

},{
    timestamps : true
})


const User = mongoose.model('User', userSchema)

export default User