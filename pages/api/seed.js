import { connectToDatabase } from "../../lib/monggodb"
import dataQ from "../../dataQ"

export default async function  handler(req, res) {

    try {
        // connect to the database
        let { db } = await connectToDatabase();
     
        // const customer = await db.collection("customers").deleteMany({});
        await db.collection("customers").insertMany(dataQ);

        return res.json({
            message: 'Post added successfully'});
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
  }
  


  