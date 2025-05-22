require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = Number(process.env.PORT) || 8000;
const indexRoute=require("./router")
mongoose.connect('mongodb://127.0.0.1:27017/ecom').then(()=>{
    console.log("Database Connection successfully")
}).catch(err => console.log(err));

app.use(express.json())

app.use("/", indexRoute)

 
app.listen(PORT, () => {
  console.log(`Application Running ${PORT}`);
});
