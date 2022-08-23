import dataQ from "../../dataQ"

import { connectToDatabase } from "../../lib/monggodb"

const ObjectId = require('mongodb').ObjectId;

// export default async function handler(req, res) {
//     // switch the methods
//     switch (req.method) {
//         case 'GET': {
//             return getPosts(req, res);
//         }

//         case 'POST': {
//             return addPost(req, res);
//         }

//         case 'PUT': {
//             return updatePost(req, res);
//         }

//         case 'DELETE': {
//             return deletePost(req, res);
//         }
//     }
// }

// async function addPost(req, res) {
//   try {
//       // connect to the database
//       let { db } = await connectToDatabase();
//       // add the post
//       await db.collection('posts').insertOne(JSON.parse(req.body));
//       // return a message
//       return res.json({
//           message: 'Post added successfully',
//           success: true,
//       });
//   } catch (error) {
//       // return an error
//       return res.json({
//           message: new Error(error).message,
//           success: false,
//       });
//   }
// }




const handler = async (req, res) => {

  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // add the post
    const res1 = await db.collection('customers').find( {
      $and:[
        { nama: { $regex:'putri', $options: 'i' }},
        { alamat: { $regex:'dorokandang', $options: 'i' }}
    
    ]})

    .sort({ published: -1 })
    .toArray();
   
    
    ;
    console.log(res1)
   
    return res.json({
      message: 'Post added successfully',
      success: true,
      respond1 : res1
     
  });
} catch (error) {
    // return an error
    return res.json({
        message: new Error(error).message,
        success: false,
    });
}


};
export default handler;

