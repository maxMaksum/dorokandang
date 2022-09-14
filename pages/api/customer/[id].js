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
    return getHandler(req, res, user);
  } else if (req.method === 'PUT') {
    return putHandler(req, res);
  } else if (req.method === 'DELETE') {
    return deleteHandler(req, res);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};
const getHandler = async (req, res) => {
  await db.connect();
  const product = await Customers.findById(req.query.id);
  await db.disconnect();
  res.send(product);
};
const putHandler = async (req, res) => {

  await db.connect();
  const user = await Customers.findById({_id: mongoose.Types.ObjectId(req.query.id)});
  if (user) {
    user.rm = req.body.rm;
    user.nama = req.body.nama;
    user.namakk = req.body.namakk;
    user.alamat = req.body.alamat;
    user.rt = req.body.rt;
    user.rw = req.body.rw;
   
   const newUser = await user.save();
 
    await db.disconnect();
    res.send({ message: 'Product updated successfully'});
  } else {
    await db.disconnect();
    res.status(404).send({
      message: 'Product not found' });
  }
};
const deleteHandler = async (req, res) => {
  await db.connect();
  console.log(req.query)
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