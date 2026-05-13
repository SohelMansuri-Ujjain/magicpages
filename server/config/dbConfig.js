import mongoose from "mongoose"
import dns from "dns";

const connectDB = async()=>{
    dns.setServers(["8.8.8.8", "8.8.4.4"]);
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
            console.log(`DB CONNECTION SUCCESSFUL : ${conn.connection.name}`.bgGreen)
    }catch(error){
        console.log(`ERROR IN DB CONNECTION : ${error.message}`.bgRed)
    }
}

export default connectDB