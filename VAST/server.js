const express = require("express");
const app = express();
var http = require('http').Server(app);
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('client/build/'));
const cors = require("cors");
const port = 3000;
app.use(cors());
app.use(express.json());
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb+srv://carsoe2:krVXU2PP5HgveqOX@cluster0.nlabenv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.use((req, res, next) => {
    if (!req.url.startsWith('/node/')) {
        next();
        return;
    }
    res.redirect(307, req.url.substring(5));
    next();
});

app.listen(port, () => {
    // perform a database connection when server starts
    main().catch(console.error);
    console.log(`Server is running on port: ${port}`);
});

async function main() {
    try {
        await client.connect();
    } catch (e) {
        console.error(e);
    } finally {
        client.close();
    }
}

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/client/build/");
});

// This section will help you get a list of all the records.
app.get('/api/windVel', async function (req, res) {
    await client.connect();
    let db_connect = client.db("VAST").collection("windVel");
    const dbRes = db_connect.find({}, {_id:"monthlyWindAvg"});
    const dbArr = await dbRes.toArray();
    //console.log(dbArr);
    res.status(200).send(dbArr);
});