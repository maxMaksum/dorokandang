import { useSession } from 'next-auth/react'
import React from 'react'
import FormAdd from '../components/FormAdd'
import Headers from '../components/Headers'
import TableNew from '../components/TableNew'


function addRm() {
  const {data: session, status} = useSession()
  useEffect(()=>{
    if(!session){
        router.push("/login")
    }
},[])
  return (
    <div className="w-full relative bg-gray-50">
      <Headers />
      <div className='w-100 flex items-center justify-center mt-8'>
        <FormAdd/>
      </div>
      <div className='flex flex-col items-center justify-center w-100'>
        <TableNew/>
      
    </div> 
    </div>
    
  )
}

export default addRm