import {getSession} from "next-auth/react"
const ObjectId = require('mongodb').ObjectId;
import Customers from '../../../lib/Customers'
import db from '../../../lib/db';
import mongoose from "mongoose";
import { _id } from "@next-auth/mongodb-adapter";

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

  const {id} = req.query
  let myId = id[0]
  console.log(myId)
  
  try {
   await db.connect()
   const res2 = await Customers.findById(mongoose.Types.ObjectId(myId)) 
   return res.json({
     message: 'Post added successfully',
     success: true,
     respond1 : res2
 })
   
 }
   catch (error) {
     return res.json({
         message: new Error(error).message,
         success: false,
     });
 }
};

const putHandler = async (req, res) => {
  console.log("tytytyty",req.body._id)

const { _id, nama, namakk, alamat, rt, rw} = req.body
let myId = _id.toString().trim()
console.log(myId)
  
  await db.connect();
  const myabc = await Customers.findOne({myId})

  if(myabc){

  
  const user = await Customers.findOneAndUpdate({myId},{
    rm : req.body.rm,
    nama : req.body.nama,
    namakk : req.body.namakk,
    alamat : req.body.alamat,
    rt : req.body.rt,
    rw : req.body.rw
  },{
    new: true
  });
  const user1 = await user

  let myUser = JSON.stringify(user1)
   console.log("jdj",myUser)
    await db.disconnect();
    res.status(200).send(
      { message: 'Product updated successfully',
       myData:myUser}
      
      );
  } else {
    await db.disconnect();
    res.status(404).send({
      message: 'Product not found' });
  }
 
};

const deleteHandler = async (req, res) => {
  const myId = req.query.id[0].toString()
  console.log(myId)

  await db.connect();
  const res2 = await Customers.findOneAndDelete({_id:myId})
  res.send({ message: 'Product deleted successfully' });
 
};
export default handler;