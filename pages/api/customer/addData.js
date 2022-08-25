import { connectToDatabase } from "../../../lib/monggodb"
import {getSession} from "next-auth/react"
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
       
        case 'POST': {
            return addPost(req, res);
        }

        case 'PUT': {
            return updatePost(req, res);
        }

        case 'DELETE': {
            return deletePost(req, res);
        }
    }

    return res.json({
        message: 'Post added successfully',
        success: true,
    });

}

async function addPost(req, res) {
  try {
      // connect to the database
      let { db } = await connectToDatabase();
      const {rm, nama, namakk, alamat, rt, rw} =req.body
      const customer = await db.collection("customers").insertOne({
        rm:rm,
        nama:nama,
        namakk:namakk,
        alamat:alamat,
        rt:rt,
        rw:rw
      });
      const _id = await customer.insertedId.toString()
   
    
      return res.json({
          message: 'Post added successfully',
          success: true,
          customer:_id
         
      });
  } catch (error) {
      // return an error
      return res.json({
          message: new Error(error).message,
          success: false,
      });
  }
}




  
 


