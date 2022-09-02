const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const dbConnect = require('./utils/dbConnect');

const toolsRoutes = require("./routes/v1/tools.route.js");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// dbConnect();

// Tools route
app.use("/api/v1/tools", toolsRoutes);



app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.all("*", (req, res) => {
    res.send("No Route Found");
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})