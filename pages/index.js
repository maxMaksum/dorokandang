import Head from 'next/head'
import {useSession, signIn, signOut, getSession} from "next-auth/react"
import React, {useContext, useEffect, useState} from 'react'
import { Store } from '../components/contex/myContext'
import { useRouter } from 'next/router'
import Headers from '../components/Headers'
import TableNew from '../components/TableNew'
import EditForm2 from '../components/EditForm2'
import Spinner from '../components/Spinner'
import FormAdd from '../components/FormAdd'

export default function Home() {
    const router = useRouter()

    const {data: session, status} = useSession(
      {
        required: true,
        onUnauthenticated() {
          // The user is not authenticated, handle it here.
          router.push("/login");
        },
      }
    )

    const { showForm, showSearchOK, showAddForm, showSpinner} = useContext(Store);
    useEffect(() => {
      if (!session.user.admin) {
          router.push('/login');
        }
    }, []);

    if (status=="loading" ) {
        return <div> <Spinner /> </div>;
      }
    
    if(session.user.admin){
    return (

        <div  className="w-full relative bg-gray-200 ">
            <Head>
                <title>PUSKESMAS LASEM</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className='mx-4'>
              <Headers myPath="/" />   
            </div>
                <main className='relative bg-green-600 flex items-center justify-center w-screen h-screen px-10'>
                  
                     {showSpinner?
                     <Spinner className="z-50" /> : <TableNew />
                     }
            
                </main>
                
                <div className={showForm?'absolute top-20 m-auto left-0 right-0 z-30':'hidden'}>
                    <EditForm2/>
                </div>
                <div className={showAddForm ?'absolute top-20 m-auto left-0 right-0 z-30':'hidden'}>
                    <FormAdd/>
                </div>
                
        </div>
        
    )}else {
        return(
          <button onClick={signIn}> signIn</button>
    
        )
       
      }
} 

export async function getServerSideProps(context) {
    const session = await getSession(context)
    if (!session) {
      return {
        redirect: {
          permanent: false,
          destination: "/login",
        },
      };
    }
     return {
       props: {
         session
       }
     };
   }
