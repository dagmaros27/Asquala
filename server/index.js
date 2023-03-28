const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const userRoute = require("./routes/users");
const port = process.env.PORT || 3000;
 const uri = "mongodb+srv://dagmaros:dagmaros27@cluster0.qpjncnd.mongodb.net/Excercise?retryWrites=true&w=majority"
const xx = {
    useUnifiedTopology: true,
    useNewURLParser: true,
    useCreateIndex: true,
}
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log('mongodb connect success'))
.catch(error=>console.log('mongodb connect error'))

//app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/",userRoute);

app.listen(port, ()=>{
    console.log("listening on port " + port);
})

