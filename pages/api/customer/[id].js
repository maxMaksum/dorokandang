import { connectToDatabase } from "../../../lib/monggodb"
import {getSession} from "next-auth/react"
const ObjectId = require('mongodb').ObjectId;

const handler = async (req, res) => {
 

  
  if(req.method=="GET"){
  
    return getHandler (req, res)

  }

  if(req.method=="PUT"){
  
    return putHandler (req, res)

  }

  if(req.method=="DELETE"){
   
    return deleteHandler (req, res)


  }
  
  else{
  
    res.status(200).json({ name: 'John Doe' })
  }


};

const getHandler = async (req, res) => {
  let { db } = await connectToDatabase();

  const { id } = req.query
  const res1 = await db.collection('customers').find({
    _id: new ObjectId(id)}).toArray()


return res.json({
  message: 'Post find successfully',
  success: true,
  myData: res1
 
});
 
};

const putHandler = async (req, res) => {
 
  let { db } = await connectToDatabase();
  let {_id, rm, nama, namakk, alamat, rt, rw} = req.body


  var myquery = {_id: new ObjectId(_id)};
  var newvalues = { $set:  { rm:rm, nama:nama,namakk:namakk,alamat:alamat,rt:rt,rw:rw, alamat:alamat} };

   await db.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    
  });

return res.json({
  message: 'Post added successfully',
  success: true,
  // myData: res1
 
});

};
const deleteHandler = async (req, res) => {
  const {id} = req.query
  console.log(req.query.id)
  try {
    // Connecting to the database
   
    let { db } = await connectToDatabase();
   
    // Deleting the post
    await db.collection('customers').deleteOne({
        _id: new ObjectId(id),
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

};
export default handler;

