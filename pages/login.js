import React, { useEffect } from 'react'
import{useSession, signIn, signOut, getProviders, getSession} from "next-auth/react"
import { useRouter } from 'next/router'
import Headers from '../components/Headers'

export default function login() {
    const {data: session} = useSession()
    const router = useRouter()

useEffect(()=>{
  if(session){
    router.push("/")
  }
}, [session])
   


    return (

        <div className='w-full h-screen bg-gray-100 '>
           <div  className='flex items-center justify-center'>
              <button onClick={()=>signIn()}>
               SignIn
            </button>
           </div>
        </div>
        
    )


  
}

export async function getServerSideProps(context) {
 
 
  return {
    props: {
    
      
    },
  };
}