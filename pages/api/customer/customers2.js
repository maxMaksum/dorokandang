import { connectToDatabase } from "../../../lib/monggodb"
import {getSession} from "next-auth/react"
const ObjectId = require('mongodb').ObjectId;
import Customers from '../../../lib/Customers'
import db from '../../../lib/db';
import mongoose from "mongoose";

export default function handler(req, res) {
 
   if (req.method === 'POST') {
    return postHandler(req, res);
  }

  res.status(200).json({ name: 'John Doe' })
}

const postHandler = async (req, res) => {
  
const  {rm, nama, namakk, alamat, rt, rw} = req.body

  await db.connect()
  const newProduct = new Customers({rm, nama, namakk, alamat, rt, rw});
  console.log(newProduct)

  const product = await newProduct.save();
  await db.disconnect();
  res.send({ message: 'Customers created successfully', });
};



// export default handler;

