import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {useSession, signIn, signOut, getSession} from "next-auth/react"

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
              {/* <FormDetail data1 ={data}/> */}
              </div>
            </div>
        )
    } 



export default detailPage

export async function getServerSideProps(context) {
  
  


  
//   await db.disconnect();
  return {
    props: {
       
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