import Head from 'next/head'
import {useSession, signIn, signOut, getSession} from "next-auth/react"
import React, {useContext, useEffect, useState} from 'react'
import { Store } from '../components/contex/myContext'
import { useRouter } from 'next/router'
import Headers from '../components/Headers'
import TableNew from '../components/TableNew'
import EditForm2 from '../components/EditForm2'



export default function Home() {

    const router = useRouter()
    const {data: session, status} = useSession()
    const { addUser, users, resetUsers, showForm, showSearchOK } = useContext(Store);
   

    useEffect(()=>{
        if(!session){
            router.push("/login")
        }
    },[router])
  
    
        return (
            
            <div  className="w-full relative bg-gray-50 ">
                <Head>
                    <title>PUSKESMAS LASEM</title>
                    <meta name="description" content="Generated by create next app"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <Headers/>
                    <main className='relative'>
                       <TableNew />
                       <div className = {showSearchOK?"bg-green-900 h-screen w-screen absolute top-0 ":"hidden"}></div>

                    </main>
                    <div className={showForm?'absolute top-20 m-auto left-0 right-0 z-0':'hidden'}>
                         <EditForm2/>
                    </div>
            </div>
           
        )
    } 

export const getServerSideProps = async (contex) => {

    return {props: {
            
        }}

}
