import React, {useContext, useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {useSession, signIn, signOut, getSession} from "next-auth/react"

import Headers from '../../components/Headers'
import { Store } from '../../components/contex/myContext'

import EditForm from "../../components/EditForm"



function detailPage({dataIsun}) {

    const {data: session, status} = useSession()
    const router = useRouter()
   
    if(session){
      return (
        <div className=''>
          <Headers />

             <div className="flex flex-col items-center justify-center">
              <EditForm dataIsun={dataIsun} />
            </div>
          </div>
      )


    }

    else{
      return(

        <div>
          <button onClick={()=>router.push("/login")}>Sign In</button>
        </div>
      )
     
    }
     
    } 



export default detailPage

export async function getServerSideProps(context) {

  const id = context.params.id 

  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/customer/${id}`)
  const data = await res.json()

  const {myData, message} = data
  console.log(myData)
  return {
    props: {
       
      dataIsun: myData? myData : null,
      pesenIsun : message
    },
  };
}


 
function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}