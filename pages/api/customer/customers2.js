
import {getSession} from "next-auth/react"
const ObjectId = require('mongodb').ObjectId;
import Customers from '../../../lib/Customers'
import db from '../../../lib/db';
import mongoose from "mongoose";

export default function handler(req, res) {
 
  if (req.method === 'PUT') {
    return getHandler(req, res);
  }

   if (req.method === 'POST') {
    return postHandler(req, res);
  }

  res.status(200).json({ name: 'John Doe' })
}

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




const postHandler = async (req, res) => {
  
const  {rm, nama, namakk, alamat, rt, rw} = req.body

  await db.connect()
  const newProduct = new Customers({rm, nama, namakk, alamat, rt, rw});
  const product = await newProduct.save();
  const newUser1 = JSON.stringify(product)

  await db.disconnect();
  res.send({ message: 'Customers created successfully', newUser:newUser1});
};



// export default handler;

