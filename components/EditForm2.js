import React, { useContext, useEffect, useState } from 'react'
import { Store } from './contex/myContext';
import{fetchAdd, fetchUpdate, fetchDelete, fetchSearch }from "./CrudFunction"
import { useRouter } from 'next/router';
import SearchInput from "./SearchInput";

function EditForm2() {
  const { addUsers, users,  setUsers, removeUsers, showForm, userEdit, setShowSpinner, setUserEdit, setShowForm,updateUsers } = useContext(Store);
  const [showAdd, setShowAdd] =useState(true)
  const [showEdit, setShowEdit] =useState(true)
  const [dataM, setDataM] = useState({_id:"", rm:"", nama:"",namakk:"", alamat:"",rt:"",rw:""})
  const [showInput, setShowInput] =useState(true)

 const addForm = async (e)=>{
        e.preventDefault()
        setShowInput(false)
        setShowAdd(!showAdd)
        setDataM({...dataM, nama:"" })
      
    }

    const editForm = async (e)=>{
        e.preventDefault()
        setShowInput(false)
        setShowEdit(false)
      
    }

    const saveForm = async(e)=>{
        e.preventDefault()
        setShowSpinner(true)
        setShowAdd(!showAdd)
        const data2 = await fetchAdd("/api/customer/customers2", dataM)
        setShowSpinner(false)
        const data3 = JSON.parse(data2.data.newUser)
        setUsers([...users, {rm:data3.rm, 
            nama:data3.nama, 
            alamat:data3.alamat, 
            rm:data3.rm,
            rt:data3.rt}])
        alert(data2.data.message)
  
        setShowForm(!showForm)}

    const updateForm = async (e)=>{
    e.preventDefault()
    setShowEdit(true)
    setShowInput(false)
    setShowSpinner(true)
    const res = await fetchUpdate(`/api/customer3/${dataM._id}`, dataM)
    setShowSpinner(false)
    let myDataq = JSON.parse(res.data.myData)
    const myUserq = users.map(x=>{
        if(x._id == myDataq._id){
            return{
                ...x, 
                rm:myDataq.rm,
                nama:myDataq.nama,
                alamat:myDataq.alamat,
                rt:myDataq.rt, 
                rw:myDataq.rw
            }
        }
       return x 
    })
     console.log(myUserq)
    alert(res.data.message)
    setUsers(myUserq)
    setShowForm(false)
  
    }

    const deleteForm = async(e, id)=>{
    e.preventDefault()
    setShowSpinner(true)
    const res = await fetchDelete(`/api/customer3/${id}`)
    alert(res.data.message)
    setShowSpinner(false)
    setShowForm(false)
        
        const newUser = users.filter(x=>{
        return x._id !== id})
    setUsers(newUser)
    }

    const getAlamat =(y)=>{
        setDataM({...dataM, alamat: y})
        console.log(y)
    }
    const closeOK = (e)=>{
        e.preventDefault()
        setShowForm(!showForm)
        setShowEdit(true)
        
    }   
     
    useEffect(()=>{
        setDataM(userEdit)
    },[userEdit])
      
  return (
    <div className='w-full '>
        <div className='flex items-center justify-center'>
        <form className=" w-96 bg-green-900 p-4 z-50 rounded">
            <div className ="mb-2">
                <label htmlFor="rm" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">RM</label>
                <input
                disabled={showInput}
                 type="text"
                 id="rm"
                 className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
             
                value={dataM.rm ||""}
                onChange ={(e)=>setDataM({...dataM, rm:e.target.value})} />
               
            </div>
            <div className ="mb-2">
                <label htmlFor="nama" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama</label>
                <input
                 disabled={showInput}
                 type="text" id="nama" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                value={dataM.nama ||""}
                onChange ={(e)=>setDataM({...dataM, nama:e.target.value})}
                />
            </div>
            <div className ="mb-2">
                <label htmlFor="nama-kk" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama KK</label>
                <input
                 disabled={showInput}
                 type="text" id="nama-kk" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                value={dataM.namakk||""}
                onChange ={(e)=>setDataM({...dataM, namakk:e.target.value})}
                />
            </div>
            <div className ="mb-2">
                <label htmlFor="alamat" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">RT</label>
                <input
                 disabled={showInput}
                 type="text" id="alamat" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                value={dataM.rt||""}
                onChange ={(e)=>setDataM({...dataM, rt:e.target.value})}
                />
            </div>
            <div className ="mb-2 relative">
                <label htmlFor="rw" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">RW</label>
                   <SearchInput
                    disabled={showInput}
                    className={'absolute top-0 left-0 z-20  shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'} 
                    getAlamat={getAlamat}
                    alamatQ = {dataM.alamat}
                    />
               
            </div>
          
             <div className="flex items-center justify-center space-x-4">
                <button onClick={(e)=>editForm(e)}type="submit"
                 className = {showEdit ? "text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800":"hidden"
                }>Edit</button>

               <button onClick={(e)=>updateForm(e, dataM)}type="submit" className ={showEdit ? "hidden":"text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}>Update</button>

               <button 
               onClick={(e)=>addForm(e)}
               type="submit"
               className ={showAdd?"text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800":"hidden"} 
               
               >Add</button>

                <button onClick={(e)=>saveForm(e)}type="submit" className ={!showAdd?"text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800":"hidden"}>Save</button>

                <button onClick={(e)=>deleteForm(e, dataM._id)}type="submit" className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">DELETE</button>

                <button onClick={(e)=>closeOK(e)}type="submit" className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">CLOSE</button>
            </div>
          
        </form>

        </div>

    </div>
  )
}

export default EditForm2