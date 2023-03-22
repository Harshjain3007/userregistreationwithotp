const express = require("express");
const multer = require('multer')
const mongoose=require('mongoose')
const route = require('./routes/route')

const imagecontroller = require('./controller/imageController')
const app = express()
const imagemodel = require("./models/imageModel")
app.use(express.json())
app.use(multer().any())


mongoose.set('strictQuery', false)

mongoose
  .connect(
    "mongodb+srv://HarshJain:harsh321@cluster0.dwkz9.mongodb.net/Imagecollection-db")
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

  app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000))
})
