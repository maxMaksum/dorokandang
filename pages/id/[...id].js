import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {useSession, signIn, signOut, getSession} from "next-auth/react"
import connectDB from '../../lib/db'
import Cusomer from '../../model/RM'
import mongoose from 'mongoose'

import Headers from '../../components/Headers'
import FormDetail from '../../components/FormDetail'

function detailPage({data}) {
    const router = useRouter()

  
        return (
          <div className=''>
            <Headers />

             <div className="flex flex-col items-center justify-center">
              <FormDetail data1 ={data}/>
              </div>
            </div>
        )
    } 



export default detailPage

export async function getServerSideProps(context) {
  await connectDB()
  const { params } = context;
  const { id } = params;
  const [idQ] =id

   console.log(idQ)
//   const product = await Product.findOne({ slug }).lean();
  const abc =  await Cusomer.findOne({_id:idQ}).lean()
  const abd = convertDocToObj(abc)

  console.log(abd)
  
//   await db.disconnect();
  return {
    props: {
        data : abd
    //   product: product ? db.convertDocToObj(product) : null,
    },
  };
}


 
function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}