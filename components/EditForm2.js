import React, { useContext, useEffect, useState } from 'react'
import { Store } from './contex/myContext';
import CloseIcon from '@mui/icons-material/Close';
import { AddBusinessRounded } from '@mui/icons-material';
import{fetchAdd, fetchRead, fetchUpdate, fetchDelete }from "./CrudFunction"
import { useRouter } from 'next/router';
const axios = require('axios');

function EditForm2() {
const { addUsers, users, removeUsers, showForm, userEdit, setUserEdit, setShowForm,updateUsers } = useContext(Store);
  const [dataM, setDataM] = useState({})
    const router = useRouter()

const addForm = async (e)=>{
      e.preventDefault()
      const res = await fetchAdd(`/api/customer/customer`, userEdit)
      const data = await res
      const data2 = await fetchRead("/api/customer/customer",{ params: {userEdit} })
      return data2
    
  }


  
  
  //  addUsers(data)


 
const updateForm = async (e)=>{
    e.preventDefault()
    console.log(userEdit)
    const res = await fetchUpdate(`/api/customer/customer`, userEdit)
    const data = await res.success
    console.log(data)
    if(data){
      updateUsers(userEdit._id, userEdit)
    }
    router.push("/")
    return data
  
}

const deleteForm = async(e, id)=>{
  e.preventDefault()
  const response = await fetchDelete(`/api/customer/${id}`, id)
  const data = response
  return data
}
  
const closeOK = (e)=>{
  e.preventDefault()
  setShowForm(!showForm)
 }    
      
   


  return (
    <div className='w-full '>
        <div className='flex items-center justify-center'>
        <form className=" w-96 bg-gray-200 px-4">
            <div className ="mb-2">
                <label htmlFor="rm" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">RM</label>
                <input type="text" id="rm" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
             
                value={userEdit.rm ||""}
                onChange ={(e)=>setUserEdit({...userEdit, rm:e.target.value})} />
               
            </div>
            <div className ="mb-2">
                <label htmlFor="nama" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama</label>
                <input type="text" id="nama" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                value={userEdit.nama ||""}
                onChange ={(e)=>setUserEdit({...userEdit, nama:e.target.value})}
                />
            </div>
            <div className ="mb-2">
                <label htmlFor="nama-kk" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama KK</label>
                <input type="text" id="nama-kk" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                value={userEdit.namakk||""}
                onChange ={(e)=>setUserEdit({...userEdit, namakk:e.target.value})}
                />
            </div>
            <div className ="mb-2">
                <label htmlFor="alamat" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">RT</label>
                <input type="text" id="alamat" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                value={userEdit.rt||""}
                onChange ={(e)=>setUserEdit({...userEdit, rt:e.target.value})}
                />
            </div>
            <div className ="mb-2">
                <label htmlFor="rw" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">RW</label>
                <input type="text" id="rw" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                value={userEdit.rt||""}
                onChange ={(e)=>setUserEdit({...userEdit, rw:e.target.value})}
                />
            </div>
          
             <div className="flex items-center justify-center space-x-4">
               <button onClick={(e)=>updateForm(e,userEdit._id)}type="submit" className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
               <button onClick={(e)=>addForm(e)}type="submit" className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
               <button onClick={(e)=>deleteForm(e,userEdit._id)}type="submit" className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">DELETE</button>
               <button onClick={(e)=>closeOK(e)}type="submit" className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">CLOSE</button>

            </div>
          
        </form>

        </div>

    </div>
  )
}

export default EditForm2