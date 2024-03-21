import mongoose from "mongoose"
import * as dotenv from "dotenv"
dotenv.config()
import { DB_NAME } from "./constants.js"

const database = `${process.env.MONGO_DB_URI}/${DB_NAME}`

mongoose.connect(database)
    .then(() => {
        console.log("DB Connected");
    })
    .catch(() => {
        console.log("Error in DB connection");
    })