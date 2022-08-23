import React from 'react'

import Image from 'next/image';
import LogoutIcon from '@mui/icons-material/Logout';
import{useSession, signIn, signOut} from "next-auth/react"
import Search from './Search';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import { useRouter } from 'next/router';


function Headers() {
  
  return (

      <header className="sticky top-0 z-40 bg-gray-200 flex items-center justify-around py-1.5 px-3 focus-within:shadow-lg w-full">
        <div onClick={()=>router.push("/")} className="flex  items-center space-x-2 cursor-pointer ">
       
        <Image src="/logo-puskesmas.png" width={40} height={40} />
         <p className='hidden'>
          LASEM
         </p>
        
        
      </div>
      <div  className='flex-1'>
      <Search/>
      </div>
       <div className="flex items-center space-x-2">


          <div onClick={()=>router.push("/addRm")}  className="flex items-center justify-center space-x-4 cursor-pointer">
            <p className='hidden sm:inline-flex'>Add RM</p>
          < DataSaverOnIcon />
          </div>
          
          <div onClick={()=>signOut()} >
          <LogoutIcon className="cursor-pointer" />
          </div>
     

      </div>
      
      
      </header>    
  )
}


 

  

export default Headers