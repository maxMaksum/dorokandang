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

        <div className='w-full h-screen bg-green-900 text-gray-50'>
           <div  className='flex flex-col w-full h-full items-center justify-center space-y-4 font-bold'>
              <button onClick={()=>signIn()} className="bg-emerald-500 text-uppercase rounded-md text-bold p-4">
                  SIGNIN
               </button>

               <h2 className="border-b border-gray-200 dark:border-gray-700">Project By: Viky Febry Q.</h2>
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