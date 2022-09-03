const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const dbConnect = require('./utils/dbConnect');

const toolsRoutes = require("./routes/v1/tools.route.js");
const viewCount = require('./middleware/viewCount');
const { default: rateLimit } = require('express-rate-limit');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.set("view engine","ejs");

// app.use(viewCount);
// Apply the rate limiting middleware to all requests
// app.use(limiter);

// dbConnect();

// Tools route
app.use("/api/v1/tools", toolsRoutes);



app.get('/', (req, res) => {
    // res.send('Hello World!')
    // res.sendFile(__dirname+"/public/test.html");
    res.render("home.ejs",{
        id:1,
        user:{
            name:"text"
        }
    });
})
app.all("*", (req, res) => {
    res.send("No Route Found");
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})