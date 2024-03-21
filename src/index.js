import * as dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"
import express from "express"
const app = express()
const port = 3000
import { DB_NAME } from "./constants.js"
import { User } from "../models/user.model.js"

const database = `${process.env.MONGO_DB_URI}/${DB_NAME}`

mongoose.connect(database)
    .then(() => {
        console.log("DB Connected");
    })
    .catch(() => {
        console.log("Error in DB connection");
    })

app.get("/", (req, res) => {
    res.send("Hello")
})

app.post("/user", async (req, res) => {
    console.log("All the users");
    const newUser = new User({
        name: "Prayag",
        email: "abc123@gmail.com"
    })
    await newUser.save()
        .then(() => {
            console.log("User created");
            res.send(newUser)
        })
        .catch(() => {
            console.log("Failed to create user");
        })
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})