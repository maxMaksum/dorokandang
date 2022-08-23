
import { connectToDatabase } from "../../../lib/monggodb"
import {getSession} from "next-auth/react"
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'POST': {
            return getPosts(req, res);
        }

        // case 'POST': {
        //     return addPost(req, res);
        // }

        case 'PUT': {
            return updatePost(req, res);
        }

        case 'DELETE': {
            return deletePost(req, res);
        }
    }
}

async function addPost(req, res) {
  try {
      // connect to the database
      let { db } = await connectToDatabase();
      // add the post
      await db.collection('posts').insertOne(JSON.parse(req.body));
      // return a message
      return res.json({
          message: 'Post added successfully',
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




  const getPosts = async (req, res) => {
    const session = await getSession({ req });
    console.log(req.body.data)
    const {rm, nama, namakk, alamat} = req.body.data
    // console.log(rm)
    try {
      // connect to the database
      let rme ="001"
      let name =""
      let namekk ="legiman"
      let address =""
      let { db } = await connectToDatabase();

      if(rm){
        const res1 = await db.collection('customers').find(
              { rm: { $regex: `${rm}`, $options: 'i' }})
      
          .sort({ published: -1 })
          .toArray();
       
          return res.json({
            message: 'Post added successfully',
            success: true,
            respond1 : res1
           
        });
        
      }

      // add the post
        const res1 = await db.collection('customers').find( {
        $and:[
          { nama: { $regex: nama, $options: 'i' }},
          { namakk: { $regex: namakk, $options: 'i' }},
          { alamat: { $regex:alamat, $options: 'i' }}
       
      
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