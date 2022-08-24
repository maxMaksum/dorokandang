import { connectToDatabase } from "../../../lib/monggodb"
import {getSession} from "next-auth/react"
import { FindCursor } from "mongodb";
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




  
 

  async function deletePost(req, res) {
    try {
        // Connecting to the database
        let { db } = await connectToDatabase();
       

        // Deleting the post
        // await db.collection('customers').deleteOne({
        //     _id: new ObjectId(req.body),
        // });

        // returning a message
        return res.json({
            message: 'Post deleted successfully',
            success: true,
        });
    } catch (error) {

        // returning an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

async function updatePost(req, res) {
    try {
        // connect to the database
        
        let { db } = await connectToDatabase();
        let {_id, rm, nama, namakk, alamat, rt, rw} = req.body
        console.log(nama)
       
        // await db.collection('customer').updateOne(
        //     {
        //         _id: new ObjectId(req.body._id),
        //     },
        //     { $set: 
        //         { rm:req.body.rm, nama:req.body.nama,namakk:req.body.namakk,alamat:req.body.alamat,rt:req.body.rt,rw:req.body.rw,}
        //    } 
        // );
        return res.json({
            message: 'Post updated successfully',
            success: true,
        });
    } catch (error) {

        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}