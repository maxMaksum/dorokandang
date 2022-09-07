import { connectToDatabase } from "../../../lib/monggodb"
const ObjectId = require('mongodb').ObjectId;

export default function handler(req, res) {

  switch (req.method) {
      case 'POST': {
          return addUsers(req, res);
      }

      case "GET" : {
        return getUsers(req, res)
      }
      case 'PUT': {
          return updateUsers(req, res);
      }
      case 'DELETE': {
          return deleteUser(req, res);
      }
      default:
          return res.status(200).json({ name: 'John Doe' })
  }
   
  }

  const addUsers= async (req, res)=>{
    const {email, role} = req.body
    try {
      let { db } = await connectToDatabase();
      const resAdmin = await db.collection('users').find( 
        { email: { $regex: email, $options: 'i' }})
        .sort({ published: -1 })
        .toArray();
    
      if(resAdmin.length>0){
        return res.json({
            messege: 'User Already Exist',
            success: true,
            respond1 : resAdmin[0] 
        })
         
      }
      const res1 = await db.collection('users').insertOne(req.body)
      console.log(res1)
      return res.json({
          messege: 'Post added successfully',
          success: true,
          respond1 : res1[0] 
      }); 
  } 

  catch (error) {
    return res.json({
        message: new Error(error).message,
        success: false,
    });
}};
const updateUsers = async (req, res)=>{
    console.log(req.body)
    try {
      let { db } = await connectToDatabase();
      let {_id, email, role} = req.body
      var myquery = {_id: new ObjectId(_id)};
      var newvalues = { $set:  { email:email, role:role }}
      await db.collection("users").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err; 
     });


        return res.json({
            message: 'Admin updated successfully',
            success: true
        })
    
         
      }
      catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }};

const getUsers = async (req, res)=>{
   
    try {
      let { db } = await connectToDatabase();
      const resAdmin = await db.collection('users').find({})
        .sort({ published: -1 })
        .toArray();

        return res.json({
            message: 'Post added successfully',
            success: true,
            data : resAdmin
        })
    
         
      }
      catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }};
    const deleteUser = async (req, res) => {
        //   try {
        //       let { db } = await connectToDatabase();
        //       await db.collection('users').deleteOne({
        //           _id: new ObjectId(_id),
        //       });
        //       return res.json({
        //           message: 'Post deleted successfully',
        //           success: true,
        //       });
        //   }
        //  catch (error) {
        //     return res.json({
        //         message: new Error(error).message,
        //         success: false,
        //     });
        //   }
        res.status(200).json({ name: 'John Doe' })
      };
      
     

  

  
