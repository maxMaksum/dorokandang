import React, {useContext, useEffect, useState} from 'react'
import { Store } from "./contex/myContext"
import { useRouter } from 'next/router';
import SearchInput from "./SearchInput";

const axios = require('axios').default;

function FormAdd({data2}) {

  const {rm, nama, namakk, alamat, rt, rw} = data2
  const router = useRouter()
  const { addUsers, users } = useContext(Store);
  const [newUser, setNewUser] = useState([])
    const [dataQ, setDataQ] = useState({
    rm:"",
    nama:"",
    namakk:"",
    rt:"",
    rw:"", 
    alamat:""

})

console.log(data2)
useEffect(()=>{
  setDataQ({...dataQ, rm, nama, namakk, alamat, rt, rw})
},[])
        

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
    const getAlamat =(y)=>{
      setDataQ({...dataQ, alamat: y})
      console.log(y)
    }

 
  return (
          <div className='w-full h-screen bg-green-500'>
            <p className='text-center p-2'>ADD RM</p>
             <div className='flex items-center justify-center'>
            <form className=" w-96 bg-gray-200 px-4 ">
            <div className ="mb-2">
                <input type="text" 
                id="rm" 
                className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                placeholder="RM"
                value={dataQ.rm}
                onChange ={(e)=>setDataQ({...dataQ, rm:e.target.value})} />
               
            </div>
            <div className ="mb-2">
                <input 
                type="text" id="nama" 
                className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                value={dataQ.nama}
                placeholder="Nama"
                onChange ={(e)=>setDataQ({...dataQ, nama:e.target.value})}
                />
            </div>
            <div className ="mb-2">
                
                <input 
                type="text" 
                id="nama-kk" 
                className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                value={dataQ.namakk}
                placeholder="Nama KK"
                onChange ={(e)=>setDataQ({...dataQ, namakk:e.target.value})}
                />
            </div>
            
            <div className ="mb-2">
                
                <input type="text" id="rt" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                value={dataQ.rt}
                placeholder="RT"
                onChange ={(e)=>setDataQ({...dataQ, rt:e.target.value})}
                />
            </div>
            <div className ="mb-2">
                
                <input type="text" id="rw" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                value={dataQ.rw}
                placeholder="RW"
                onChange ={(e)=>setDataQ({...dataQ, rw:e.target.value})}
                />
            </div>
            <SearchInput 
            getAlamat={getAlamat}
            alamatQ = {dataQ.alamat}
            
            />
           
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
