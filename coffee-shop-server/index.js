const express = require('express');
const cors = require('cors');
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();

const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

const password = process.env.PASSWORD;
const user = process.env.USER;


const uri = `mongodb+srv://${user}:${password}@cluster-shop.s8tc27p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-shop`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        const coffeeCollection = client.db("coffeeShopDB").collection("coffees")

        app.get("/coffees", async (req, res) => {
            const cursor = coffeeCollection.find();
            const result = await cursor.toArray();
            res.send(result)
        })

        app.post("/coffees", async (req, res) => {
            const data = req.body;
            const result = await coffeeCollection.insertOne(data);
            res.send(result)
        })

        app.delete("/coffee/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await coffeeCollection.deleteOne(query);
            res.send(result)
        })

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



app.get("/", (req, res) => {
    res.send("This is Coffee Server")
})

app.listen(port, () => {
    console.log("Server is running on port: ", port);
})