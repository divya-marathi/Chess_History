const express = require('express')
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const {userRouter} = require("./Route/userRouter");
const { isError } = require('./Midlewares/ErrorHandler');
const { playersRouter } = require('./Route/playersRouter');

const app = express();

const PORT = process.env.PORT || 5000;

//midleware
app.use(cors())

app.use(express.json());

//routing 
app.use("/", userRouter)
app.use("/", playersRouter)

// Express route to fetch and store top players' rating history
app.get('/fetchAndStoreTopPlayersRatingHistory', async (req, res, next) => {
  await fetchAndStoreTopPlayersRatingHistory();
  res.send('Rating history for top players fetched and stored.');
});

app.use(isError)


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
