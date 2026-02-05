import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoURI = "mongodb+srv://kaminosmongo:kaminos3085mBVVm%40ad@kaminosdb.c2ikbbo.mongodb.net/?appName=kaminosdb"

const connectionBD = async () => {
   try {
    await mongoose.connect(mongoURI, {dbName: "Kaminos"});
    console.log("MONGODB CONNECTED!")
   } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1);
   }
}

export { connectionBD };