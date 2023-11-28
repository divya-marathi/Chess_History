const express = require('express')
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const {userRouter} = require("./Route/userRouter");
const { isError } = require('./Midlewares/ErrorHandler');
const { playersRouter } = require('./Route/playersRouter');

const app = express()

//midleware
app.use(cors())

app.use(express.json());

//routing 
app.use("/auth", userRouter)
app.use("/", playersRouter)



app.use((err, req, res, next) => {
  const message = err.message;
  const status = err.status || 503;
  return res.status(status).json({
    message,
    status: false,
  })
})

const PORT = process.env.PORT

//mongoDB connection
const ConnectionDb = async () => {
    mongoose
      .connect(process.env.mongo_url)
      .then(() => {
        console.log("Mongodb Connected");
      })
      .catch((err) => console.log("mongodb is not connected"));
  }
  ConnectionDb()
 
  
  app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`);
  });
