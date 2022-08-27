
import { connectToDatabase } from "../../../lib/monggodb"
import {getSession} from "next-auth/react"
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
   
    switch (req.method) {
        case 'POST': {
            return getPosts(req, res);
        }

        case 'PUT': {
            return updatePost(req, res);
        }

        case 'DELETE': {
            return deletePost(req, res);
        }
        default:
            return res.status(200).json({ name: 'John Doe' })
    }
}
 const getPosts = async (req, res) => {
   
    const {rm, nama, namakk, alamat} = req.body
  
 
    try {
 
      let { db } = await connectToDatabase();

      if(rm){
        const res1 = await db.collection('customers').find(
              { rm: { $regex:`^${rm}.*`, $options: 'i' }})
       
      
          .sort({ rm: -1 })
          .toArray();
       
          console.log(res1)
          return res.json({
            message: 'Post added successfully',
            success: true,
            respond1 : res1
           
        });
        
      }
        const res1 = await db.collection('customers').find( {
        $and:[
          { nama: { $regex: nama, $options: 'i' }},
          { namakk: { $regex: namakk, $options: 'i' }},
          { alamat: { $regex: alamat, $options: 'i' }}
       
      
      ]})
  
      .sort({ published: -1 })
      .toArray();
      console.log(res1)
      return res.json({
        message: 'Post added successfully',
        success: true,
        respond1 : res1
       
    }); } catch (error) {
      // return an error
      return res.json({
          message: new Error(error).message,
          success: false,
      });
  }};
 

  async function deletePost(req, res) {
    try {
        // Connecting to the database
        let { db } = await connectToDatabase();
       
        // Deleting the post
        await db.collection('customers').deleteOne({
            _id: new ObjectId(req.body),
        });

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

        const myData = await db.collection('customer').updateOne(
            {
                _id: new ObjectId(_id)
            },
           { $set:{"rm" : rm , "nama" : nama }})
        
    
        return res.json({
            message: 'Post updated successfully',
            success: true,})

    } catch (error) {

        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}