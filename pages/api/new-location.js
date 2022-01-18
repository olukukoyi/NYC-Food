// secured file
// only post request triggers this file
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body; // .body contains the data of the incoming request

    // const { title, image, address, description } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://oluadmin:weruletheworld12345@cluster0.wmw83.mongodb.net/FoodLocations?retryWrites=true&w=majority"
    );

    const db = client.db();
    const locationCollection = db.collection("locations"); // created collection on the fly, collections are objects
    const result = await locationCollection.insertOne(data); // returns a promise, result is an object with an automated generated ID
    console.log(result);

    client.close();

    res.status(201).json({ message: "Location Inserted!" });
  }
}

export default handler;
