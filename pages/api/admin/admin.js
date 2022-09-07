import { connectToDatabase } from "../../../lib/monggodb"

export default function handler(req, res) {

  switch (req.method) {
      case 'POST': {
          return addUsers(req, res);
      }
      // case 'PUT': {
      //     return updatePost(req, res);
      // }
      // case 'DELETE': {
      //     return deletePost(req, res);
      // }
      default:
          return res.status(200).json({ name: 'John Doe' })
  }
    console.log(req.body)
    res.status(200).json({ name: 'John Doe' })
  }

  const addUsers= async (req, res)=>{
    const {email, role} = req.body
    try {
      let { db } = await connectToDatabase();
      if(email){
          const res1 = await db.collection('users').insertOne(req.body)
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

