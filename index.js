import express from "express";
import dotenv from "dotenv"
import mongoose from 'mongoose';
import cors from "cors"
import path from "path";

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express();
app.use(cors())
app.use(express.json())

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to mongodb
try{
  mongoose.connect(URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true
  });
  console.log("connected to mongodb");
}
catch(error){
  console.log("Error" , error);
}

// Deining route
app.use("/book",bookRoute);

app.use("/user",userRoute)

if(process.env.NODE_ENV === 'production'){
  const dirPath = path.resolve();
  app.use(express.static("Frontend/disk"));
  app.get("*",(req,res) => {
    res.sendFile(path.resolve(dirPath,"Frontend","disk","index.html"));
  })
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})