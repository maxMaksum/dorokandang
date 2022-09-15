import React, { useContext, useEffect, useState } from 'react'
import { Store } from './contex/myContext';
import CloseIcon from '@mui/icons-material/Close';
import { AddBusinessRounded, SavedSearch } from '@mui/icons-material';
import{fetchAdd, fetchUpdate, fetchDelete, fetchSearch }from "./CrudFunction"
import { useRouter } from 'next/router';
const axios = require('axios');

function EditForm2() {
  const { addUsers, users,  setUsers, removeUsers, showForm, userEdit, setUserEdit, setShowForm,updateUsers } = useContext(Store);

  const [dataM, setDataM] = useState({rm:"", nama:"",namakk:"", alamat:"",rt:"",rw:""})
  const router = useRouter()


  const addForm = async (e)=>{
        e.preventDefault()
        setDataM({...dataM, nama:"" })

        // const data2 = await fetchRead("/api/customer/customer2",dataM)
        // return data2
      
    }

 const saveForm = async(e)=>{
  e.preventDefault()
  const data2 = await fetchAdd("/api/customer/customers2", dataM)
  const data3 = JSON.parse(data2.data.newUser)
  setUsers([...users, {rm:data3.rm, 
    nama:data3.nama, 
    alamat:data3.alamat, 
    rm:data3.rm,
    rt:data3.rt
}])
  alert(data2.data.message)
  
  setShowForm(!showForm)
  // return data2
 }

const updateForm = async (e)=>{
    e.preventDefault()
    const res = await fetchUpdate(`/api/customer/${dataM._id}`, dataM)
    let myDataq = JSON.parse(res.data.myData)
    const myUserq = users.map(x=>{
        if(x._id==myDataq._id){
            return{...x, 
                rm:myDataq.rm,
                nama:myDataq.nama,
                alamat:myDataq.alamat,
                rt:myDataq.rt, 
                rw:myDataq.rw
            }
        } 
        return x
    })

    alert(res.data.message)
    setUsers([...users, myUserq])
    setShowForm(!showForm)
  
}

const deleteForm = async(e, id)=>{
  e.preventDefault()
  const res = await fetchDelete(`/api/customer/${id}`)
  alert(res.data.message)
  const newUser = users.filter(x=>{
   return x._id !== id
  })
  setUsers(newUser)
  setShowForm(!showForm)
}

const saveSearch = async (e) =>{
    e.preventDefault()
    const data = await fetchSearch("/api/customer/customers2", { params: {...dataM} })

}
  
const searcForm= async (e) => {
    e.preventDefault()
    setDataM({})
     const data = await fetchSearch("/api/customer/customer2",{ params: {...dataM} })
     setShowSearch(true)
     setShowSearchOK(false)
    
     if(response.status){
        setStatus(true)
    }
    const {respond1} = await response.data
    addUsers(respond1)
    setShowSearch(!showSearch)
    return respond1

}
    const closeOK = (e)=>{
        e.preventDefault()
        setShowForm(!showForm)
    }   
     
    useEffect(()=>{
        setDataM(userEdit)
    },[userEdit])
      
  return (
    <div className='w-full '>
        <div className='flex items-center justify-center'>
        <form className=" w-96 bg-gray-200 px-4">
            <div className ="mb-2">
                <label htmlFor="rm" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">RM</label>
                <input type="text" id="rm" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
             
                value={dataM.rm ||""}
                onChange ={(e)=>setDataM({...dataM, rm:e.target.value})} />
               
            </div>
            <div className ="mb-2">
                <label htmlFor="nama" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama</label>
                <input type="text" id="nama" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                value={dataM.nama ||""}
                onChange ={(e)=>setDataM({...dataM, nama:e.target.value})}
                />
            </div>
            <div className ="mb-2">
                <label htmlFor="nama-kk" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama KK</label>
                <input type="text" id="nama-kk" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                value={dataM.namakk||""}
                onChange ={(e)=>setDataM({...dataM, namakk:e.target.value})}
                />
            </div>
            <div className ="mb-2">
                <label htmlFor="alamat" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">RT</label>
                <input type="text" id="alamat" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                value={dataM.rt||""}
                onChange ={(e)=>setDataM({...dataM, rt:e.target.value})}
                />
            </div>
            <div className ="mb-2">
                <label htmlFor="rw" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">RW</label>
                <input type="text" id="rw" className = "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                value={dataM.rt||""}
                onChange ={(e)=>setDataM({...dataM, rw:e.target.value})}
                />
            </div>
          
             <div className="flex items-center justify-center space-x-4">
               <button onClick={(e)=>updateForm(e, dataM)}type="submit" className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
               <button onClick={(e)=>addForm(e)}type="submit" className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
               <button onClick={(e)=>saveForm(e)}type="submit" className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
               <button onClick={(e)=>deleteForm(e, dataM._id)}type="submit" className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">DELETE</button>
               <button onClick={(e)=>searcForm(e, dataM._id)}type="submit" className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SEARCH</button>
               <button onClick={(e)=>saveSearch(e)}type="submit" className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SEARCH</button>    
            <button onClick={(e)=>closeOK(e)}type="submit" className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">CLOSE</button>

            </div>
          
        </form>

        </div>

    </div>
  )
}

export default EditForm2