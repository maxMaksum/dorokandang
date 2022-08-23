import { connectToDatabase } from "../../../lib/monggodb"
import {getSession} from "next-auth/react"
const ObjectId = require('mongodb').ObjectId;

const handler = async (req, res) => {
  const {id} =req.query
  const data = req.body

  if(req.method=="PUT"){
  
    return putHandler (req, res)

  }

  if(req.method=="DELETE"){
    //  console.log(data.rm)
    return deleteHandler (req, res)
//  res.status(200).json({ name: 'John Doe' })

  }
  
  else{
    console.log("error")
    res.status(200).json({ name: 'John Doe' })
  }


};

const getHandler = async (req, res) => {
  await connectDB();
  const product = await Cusomer.findById(req.query.id);
  await db.disconnect();
  res.send(product);
};

const putHandler = async (req, res) => {
  console.log(req.query.id)
  // await connectDB();
  // const product = await Cusomer.findById(req.query.id);
  // console.log(product)
  // if (product) {
  //   product.name = req.body.name;
  //   product.rm = req.body.rm;
  //   product.alamat = req.body.alamat;
  //   product.namakk = req.body.namakk;
  //   product.rt = req.body.rt;
  //   product.rw = req.body.rw;
  //   await product.save();
  //   // await db.disconnect();
  //   console.log("success")
  //   res.send({ message: 'Product updated successfully', data : product });
  // }
  //  else {
  //   // await connectDB();
  //   res.status(404).send({ message: 'Product not found' });
  // }
};
const deleteHandler = async (req, res) => {
  await connectDB();
  const product = await Cusomer.findById(req.query.id);
  if (product) {
    await product.remove();
  
    res.send({ message: 'Product deleted successfully'});
  }
   else {
   
    res.status(404).send({ message: 'Product not found' });
  }
};







export default handler;

