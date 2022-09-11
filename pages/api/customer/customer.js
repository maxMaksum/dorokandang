
import { connectToDatabase } from "../../../lib/monggodb"
import {getSession} from "next-auth/react"
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET': {
            return getPosts(req, res);
           
        }
        case 'POST': {
            return postPosts(req, res);
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

    const {rm, nama, namakk, alamat} = req.query
    console.log(req.query)
  

    try {
        let { db } = await connectToDatabase();
        if(rm){
            const res1 = await db.collection('customers').find(
                { rm: { $regex:`^${rm}.*`, $options: 'i' }})
            .sort({ rm: -1 })
            .toArray();
            return res.json({
                message: 'Post added successfully',
                success: true,
                respond1 : res1 
            }); 
        }

        const res1 = await db.collection('customers').find( {
        $and:[  { nama: { $regex: nama, $options: 'i' }},
                { namakk: { $regex: namakk, $options: 'i' }},
                { alamat: { $regex: alamat, $options: 'i' }}
            ]})
        .sort({ published: -1 })
        .toArray();

        return res.json({
            message: 'Post added successfully',
            success: true,
            respond1 : res1
        })
    } 

    catch (error) {
      return res.json({
          message: new Error(error).message,
          success: false,
      });
  }};
 

  async function deletePost(req, res) {
    try {
        let { db } = await connectToDatabase();
        await db.collection('customers').deleteOne({
            _id: new ObjectId(req.body),
        });
        return res.json({
            message: 'Post deleted successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

const updatePost = async (req, res) => {
    let { db } = await connectToDatabase();
    let {_id, rm, nama, namakk, alamat, rt, rw} = req.body
   
    var myquery = {_id: new ObjectId(_id)};
    var newvalues = { $set:{ rm:rm, nama:nama,namakk:namakk,alamat:alamat,rt:rt,rw:rw, alamat:alamat} };
     await db.collection("customers").updateOne(myquery, newvalues, function(err, res) {
     if (err) throw err; 
  });

    return res.json({
      message: 'Post added successfully',
      success: true,
    });

};


async function postPosts(req, res) {
    try {
        let { db } = await connectToDatabase();
        let {rm, nama, namakk, alamat, rt, rw} = req.body

      const res1 = await db.collection('customers').insertOne(
        {rm, nama, namakk, alamat, rt, rw}
      )
      console.log(res1)
      return res.json({
          messege: 'Post added successfully',
          success: true,
        
      }); 
    } 
    catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}
