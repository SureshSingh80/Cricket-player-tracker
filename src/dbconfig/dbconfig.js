import mongoose from "mongoose";



export async function connect() {
  
    try {
          await mongoose.connect(process.env.MONGO_URI);
          console.log("connected to DB");

        //   Some problem can occur with database after creating connection, to handle and detect it
          const connection=mongoose.connection;  

          connection.on('connected',()=>{
            console.log("MongoDB connected");
          })

          

           connection.on('error',(err)=>{
            console.log('mongoDB connection error, please make sure mongoDB is up and running',err);
            process.exit();
          })

    } catch (error) {
        console.log("Something went wrong in connection to DB");
        console.log(error);
    }
}
