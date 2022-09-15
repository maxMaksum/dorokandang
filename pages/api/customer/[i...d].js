import { connectToDatabase } from "../../../lib/monggodb"
import {getSession} from "next-auth/react"
const ObjectId = require('mongodb').ObjectId;
import Customers from '../../../lib/Customers'
import db from '../../../lib/db';
import mongoose from "mongoose";

const handler = async (req, res) => {
  const session = await getSession({ req });
  // if (!session || (session && !session.user.isAdmin)) {
  //   return res.status(401).send('signin required');
  // }

  // const { user } = session;
  if (req.method === 'GET') {
    return getHandler(req, res);
  } else if (req.method === 'PUT') {
    return putHandler(req, res);
  } else if (req.method === 'DELETE') {
    return deleteHandler(req, res);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};
const getHandler = async (req, res) => {

  const {rm, nama, namakk, alamat} = req.query

  try {
   await db.connect()
   if(rm){
   const res2 = await Customers.find(
       { rm: { $regex:`^${rm}.*`, $options: 'i' }}
       
   ) 


  
   return res.json({
     message: 'Post added successfully',
     success: true,
     respond1 : res2
 })

}else{
       const res1 = await Customers.find( {
       $and:[  { nama: { $regex: `^${nama}.*`, $options: 'i' }},
               { namakk: { $regex: namakk, $options: 'i' }},
               { alamat: { $regex: alamat, $options: 'i' }}
           ]}
       )   
           return res.json({
           message: 'Post added successfully',
           success: true,
           respond1 : res1
       })
   }
 }
   catch (error) {
     return res.json({
         message: new Error(error).message,
         success: false,
     });
 }
};

const putHandler = async (req, res) => {
  
  await db.connect();
  const user = await Customers.findById({_id: mongoose.Types.ObjectId(req.query.id)});
  
  console.log(user)
  if (user) {
    user.rm = req.body.rm;
    user.nama = req.body.nama;
    user.namakk = req.body.namakk;
    user.alamat = req.body.alamat;
    user.rt = req.body.rt;
    user.rw = req.body.rw;
   
   const newUser = await user.save();
   let myUser = JSON.stringify(newUser)
    await db.disconnect();
    res.send(
      { message: 'Product updated successfully', myData:myUser}
      
      );
  } else {
    await db.disconnect();
    res.status(404).send({
      message: 'Product not found' });
  }
};
const deleteHandler = async (req, res) => {
  await db.connect();

  const product = await Customers.findById(req.query.id);
  if (product) {
    await product.remove();
    await db.disconnect();
    res.send({ message: 'Product deleted successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Product not found' });
  }
};
export default handler;