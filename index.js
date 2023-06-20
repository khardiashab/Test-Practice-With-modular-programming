import express, { json } from "express";
import { config } from "dotenv";
import DbConnection from "./Utils/ConnectDb.js";
config();

// inializing app
const app = express()
app.use(express.json())


// making routes
app.use("/", (req, res) => res.send("Welcome to Test Api."))


// strating app 
const start = async () => {
  try {
    const port = process.env.PORT || 5555;
    await DbConnection.connection()
    app.listen(process.env.PORT || 5555, async () => {
      console.log(`App is listening on Port:${port}`);
    })
  } catch (error) {
    console.log("Error in Starting the app => ", error)
  }
}
start();

