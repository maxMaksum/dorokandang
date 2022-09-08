import React, {useContext, useEffect, useState} from 'react'
import { Store } from "./contex/myContext"
import { useRouter } from 'next/router';

const axios = require('axios').default;

function FormAdd() {

  const { addUsers, users } = useContext(Store);
  const [newUser, setNewUser] = useState([])

  const router = useRouter()
  const [dataQ, setDataQ] = useState({
    rm:"",
    nama:"",
    namakk:"",
    rt:"",
    rw:"", 
    alamat:""

})

const closeForm =(e)=>{
  e.preventDefault()
  router.push("/")
}

    const saveForm = async (e) => {
        e.preventDefault()
        console.log(dataQ)
        const dataNew = await fetchAdd(`/api/customer/customer/`, dataQ)
        
        router.push("/")
     }
   

     const fetchAdd = async(url, dt)=>{
      try{
      const response = await axios.post(url, dt)
      console.log(response)
      alert(response.data.messege)

      return response 
    }
    catch (error) {
      console.error(error);
    }
    }

 

    const clearData = ()=>{
       setDataQ({
        rm:"",
        nama:"",
        namakk:"",
        alamat:"",
        rt:"",
        rw:""
       })
    }

 
    
    
    return (
          <div className='w-full'>
            <p className='text-center p-2'>ADD RM</p>
             <div className='flex items-center justify-center'>
            <form className=" w-96 bg-gray-200 px-4 ">
            <div className ="mb-2">
                <label htmlFor="rm" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">RM</label>
                <input type="text" id="rm" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
             
                value={dataQ.rm}
                onChange ={(e)=>setDataQ({...dataQ, rm:e.target.value})} />
               
            </div>
            <div className ="mb-2">
                <label htmlFor="nama" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama</label>
                <input type="text" id="nama" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                value={dataQ.nama}
                onChange ={(e)=>setDataQ({...dataQ, nama:e.target.value})}
                />
            </div>
            <div className ="mb-2">
                <label htmlFor="nama-kk" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama KK</label>
                <input type="text" id="nama-kk" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                value={dataQ.namakk}
                onChange ={(e)=>setDataQ({...dataQ, namakk:e.target.value})}
                />
            </div>
            
            <div className ="mb-2">
                <label htmlFor="rt" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">RT</label>
                <input type="text" id="rt" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                value={dataQ.rt}
                onChange ={(e)=>setDataQ({...dataQ, rt:e.target.value})}
                />
            </div>
            <div className ="mb-2">
                <label htmlFor="rw" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">RW</label>
                <input type="text" id="rw" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                value={dataQ.rw}
                onChange ={(e)=>setDataQ({...dataQ, rw:e.target.value})}
                />
            </div>
    
           
               <div className="flex items-center justify-center space-x-4">
               <button onClick={(e)=>saveForm(e)}type="submit" className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SAVE</button>
               <button onClick={(e)=>closeForm(e)}type="submit" className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button>

               </div>
          
            </form>
            </div>
            </div>
       

    )
}

export default FormAdd
