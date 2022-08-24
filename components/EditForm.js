import React, { useContext, useEffect, useState } from 'react'
import { Store } from './contex/myContext';
import CloseIcon from '@mui/icons-material/Close';
import { AddBusinessRounded } from '@mui/icons-material';

import { useRouter } from 'next/router';
const axios = require('axios');

function EditForm({dataIsun}) {
    const { addUsers, users, removeUsers, showForm,userEdit, setUserEdit, setShowForm,updateUsers } = useContext(Store);
    const [myId, setMyId] = useState("")
    const router = useRouter()
   
   useEffect(()=>{
    if(dataIsun){
        setUserEdit(dataIsun[0])
    }
   

   },[])
  
   const closeOK = ()=>{
    setShowForm(!showForm)
   }


    const closeForm = async(e, id)=>{
        e.preventDefault()
        const response = await fetchDelete(`/api/customer/${id}`, id)
        const data = response
     
        return data
    }
    const fetchDelete = async(url,x)=>{
        console.log(x)
     
        try{
        const response = await axios.delete(url, x)
        const data = response.data
        alert(data.message)
        await removeUsers(x)
        router.push("/")
        return data
      }
      catch (error) {
        console.error(error);
      }
      }




    const saveForm = async (e)=>{
        e.preventDefault()
        console.log(userEdit)
        const res = await fetchUpdate(`/api/customer/${id}`, userEdit)
        const data = await res.success
        if(data){
          updateUsers(id, userEdit)
        }
        router.push("/")
        return data
      
    }

    const fetchUpdate = async(url, y)=>{
     
        try{
        const response = await axios.put(url, y)
        const data = response.data
        alert(data.message)
        // addUsers(data.data)
        return data
      }
      catch (error) {
        console.error(error);
      }
      }

      let option = [
        {value : 'Choose Desa', label: 'Choose Desa'},
        {value : 'Soditan', label: 'Soditan'},
        {value : 'Jolotundo', label: 'Jolotundo'},
        {value : 'Babagan', label: 'Babagan'},
        {value : 'Dorokandang', label: 'Dorokandang'},
        {value : 'Gedungmulyo', label: 'Gedungmulyo'},
        {value : 'Dasun', label: 'Dasun'},
        {value : 'Sumbergirang', label: 'Sumbergirang'},
        {value : 'Karangturi', label: 'Karangturi'},
        {value : 'Gedungmulyo', label: 'Gedungmulyo'},
        {value : 'Dasun', label: 'Dasun'},
        {value : 'Sumbergirang', label: 'Sumbergirang'},
        {value : 'Karangturi', label: 'Karangturi'},
        {value : 'Selopuro', label: 'Gedungmulyo'},
        {value : 'Karasgede', label: 'Dasun'},
        {value : 'Ngargomulyo', label: 'Sumbergirang'},
        {value : 'Karangturi', label: 'Karangturi'},
        {value : 'Gedungmulyo', label: 'Gedungmulyo'},
        {value : 'Dasun', label: 'Dasun'},
        {value : 'Sumbergirang', label: 'Sumbergirang'},
        {value : 'Karangturi', label: 'Karangturi'},
        {value: "Ngemplak", label:"Ngemplak"},
        {value:   "Sendangasri", label:"Sendangasri"},
        {value:  "Sendangcoyo", label:"Sendangcoyo"},
        {value: "Binangun", label:"Binangun"},
        {value:  "Kajar", label:"Kajar"},
        {value:  "Bonang", label:"Bonang"},
        {value:   "Gowak", label: "Gowak"},
        {value:  "Sriombo", label:"Sriombo"},
        {value:  "Tasiksono", label:"Tasiksono"},
        {value:  "Ponpes Alhamidyah", label: "Ponpes Alhamidyah"},
        {value:  "Pondok Almasudi", label:"Pondok Almasudi"},
        {value:  "Bangunrejo", label:"Bangunrejo"},
        {value:  "Pondokngemplak", label:"Pondokngemplak"},
        {value:   "Banggi", label:"Banggi"},
        {value:   "Gedangan  Rbg", label:"Gedangan  Rbg"},
        {value:  "Batangan", label:"Batangan"},
        {value:  "Pondok", label:"Pondok"},
        {value:   "Panti Asuhan", label:"Panti Asuhan"},
        {value:   "Pondok At Taslim", label:"Pondok At Taslim"},
        {value:  "Ponpes Al Muyassar", label:"Ponpes Al Muyassar"},
        {value:   "Doropayung" , label: "Doropayung"},
      ]

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
           
            <div>
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{userEdit.alamat}</label>
                    <select  onChange ={(e)=>setUserEdit({...userEdit, rw:e.target.value})} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        
                        {option.map((x , i)=>(
                             <option className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                             focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                             disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                             invalid:border-pink-500 invalid:text-pink-600
                             focus:invalid:border-pink-500 focus:invalid:ring-pink-500 " key={i} value={x.value||""}> {x.label||""}</option>)
                           )} 
                    </select>  
            </div>

           
             <div className="flex items-center justify-center space-x-4">
               <button onClick={(e)=>saveForm(e,userEdit._id)}type="submit" className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SAVE</button>
               <button onClick={(e)=>closeForm(e,userEdit._id)}type="submit" className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">DELETE</button>
               <button onClick={(e)=>closeOK(e)}type="submit" className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">CLOSE</button>

            </div>
          
        </form>

        </div>

    </div>
  )
}

export default EditForm