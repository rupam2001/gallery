const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cloudinary = require('cloudinary');//////////////////

require("dotenv/config");
app.use(bodyParser.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
    res.send(`<h1>Running</h1>`);
});

//importing routes
const chat = require("./routes/chat");
app.use("/chat", chat);


mongoose.connect("mongodb+srv://art_gallery:art_gallery@aurinassam@cluster0-edso8.mongodb.net/test?retryWrites=true&w=majority"
    , { useNewUrlParser: true, useUnifiedTopology: true })
const connecton = mongoose.connection;
connecton.once('open', () => {
    console.log('Connected to DB');
});
const Schema = mongoose.Schema;
const ContentsSchema = new Schema({
    imageLink: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});
const Contents = mongoose.model('contentsBase', ContentsSchema);
///////////////////////////////////////////////////////////////////////////////
cloudinary.config({
    cloud_name: 'dyezvdvzx',
    api_key: 845566372755842,
    api_secret: 'vxkhuC2p0bSejkAIQitT8V_RyhA'
});
app.get('/', (req, res) => {
    Contents.find()
        .then(contents => {
            res.json({ contents: contents });
        })
        .catch(err => { res.status(500).json({}); });
});

//notification
const notification = require("./routes/notification");
app.use("/notify", notification);



const port = process.env.PORT || 3300;

app.listen(port, console.log("Listening on 3300!"));
