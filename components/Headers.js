import Image from 'next/image';
import LogoutIcon from '@mui/icons-material/Logout';
import{useSession, signIn, signOut} from "next-auth/react"
import Search from './Search';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import { useRouter } from 'next/router';
import React, {useContext, useEffect, useState} from 'react'
import { Store } from './contex/myContext'

function Headers({myPath}) {
  const router = useRouter()
  const { showForm, showSearchOK, showAddForm, setShowAddForm, showSpinner} = useContext(Store);
  
  const showFormAdd =(e)=>{
    setShowAddForm(!showAddForm)
  }
  return (

      <header className="top-0  left-0 right-0 z-40 bg-gray-200 flex items-center justify-between py-1.5 px-3 focus-within:shadow-lg w-full">
          <div onClick={()=>router.push("/")} className="flex  items-center space-x-2 cursor-pointer ">
            <Image src="/logo-puskesmas.png" width={40} height={40} />
              <p className='hidden'>LASEM </p>

        </div>
    
      <div className ={myPath === "/" ? 'flex-1':"hidden"}>
        <Search/>
      </div>
        <div className={myPath !== "/addRm"?'flex items-center justify-between space-x-8':"hidden"}>
            <div onClick={(e)=>showFormAdd(e)}  className="flex items-center justify-center space-x-4 cursor-pointer">
              <p className='hidden sm:inline-flex'>Add RM</p>
              < DataSaverOnIcon />
            </div>

            <div onClick={()=>router.push("/admin")} className="flex  items-center space-x-4 cursor-pointer ">
              <p className='inline-flex'> Admin </p>
            </div>
            <div onClick={signOut} >
            <LogoutIcon className="cursor-pointer" />
            </div>
        </div>
      
      </header>    
  )
}


 

  

export default Headers