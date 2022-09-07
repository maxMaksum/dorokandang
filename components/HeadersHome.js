import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import Image from 'next/image';

import{signIn} from "next-auth/react"
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import { useRouter } from 'next/router';

function Headers() {
  const router = useRouter()
  
  return (

      <header className="sticky top-0 z-40 bg-gray-200 flex items-just justify-between py-1.5 px-3 focus-within:shadow-lg w-full">
          <div onClick={()=>router.push("/")} className="flex  items-center space-x-2 cursor-pointer ">
            <Image src="/logo-puskesmas.png" width={40} height={40} />
              <p className='hidden'>LASEM </p>

        </div>
      

        <div className="flex items-center space-x-2">
            <div onClick={()=>signIn({ callbackUrl: 'http://localhost:3000' })}  className="flex items-center justify-center space-x-4 cursor-pointer">
              <p className='hidden sm:inline-flex'>LOGIN</p>
              < LoginIcon />
            </div>
            
        </div>
      
      </header>    
  )
}


 

  

export default Headers