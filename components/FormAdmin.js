import React, { useState } from 'react'
const axios = require('axios').default;

function FormAdmin() {
    const [admin, setAdmin] =useState({email:"", role:false})
    const [adminLists, setAdminLists] = useState()
    const [adminId, setAmdinId] = useState(null)
    const [adminEdit, setAmdinEdit] = useState({})
    


    const saveForm = async (e)=>{
        e.preventDefault()
        const dataNew = await fetchAdd("/api/admin/admin",admin)
        console.log(dataNew.data)
        alert(dataNew.data.messege)
        setAdmin({email:"", role:false})

    }

    const editClick= (e,x)=>{
      e.preventDefault()
      setAmdinId(x._id)
      setAmdinEdit(
        x
      )
      
    }

    const saveClick = async (e, x)=>{
      e.preventDefault()
      alert("are you sure update the admin?")
      const dataNew = await fetchUpdate("/api/admin/admin",adminEdit)
      console.log(adminEdit)
      setAmdinId(null)
    }
  const deleteAdmin = async (e, id) => {
      e.preventDefault()
      
      alert("are you sure to delete the admin?")
      const response =  fetchDelete(`/api/admin/${id}`)
      const data = await response
      alert(data.data.message)
      console.log(data)
      return data
      
      
   }

    const fetchDelete = async(url)=>{
     
            try{
            const response = await axios.delete(url)
          
            return response
          
          }
          catch (error) {
            console.error(error);
          }
          }
    const fetchUsers = async (e)=>{
      e.preventDefault()
      const dataNew = await fetchAllAdmin("/api/admin/admin")
      // console.log(dataNew.data.data)
      setAdminLists(dataNew.data.data)
      return dataNew
  }

    const fetchAdd = async(url, x)=>{
      try{
        const response = await axios.post(url, x)
        return response 
      }
      catch (error) {
        console.error(error);
      }
      }

      const fetchUpdate = async(url, x)=>{
        try{
          const response = await axios.put(url, x)
          return response 
        }
        catch (error) {
          console.error(error);
        }
        }

     
      const fetchAllAdmin = async(url)=>{
          try{
            const response = await axios.get(url)
            return response 
          }
          catch (error) {
            console.error(error);
          }
        }

  return (
    <div className='w-full '>
        <div className='flex items-center justify-center'>
            <form className=" w-96 bg-gray-200 px-4">
                <div className ="mb-2">
                    <label htmlFor="nama" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                    <input type="text" id="nama" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                    placeholder='puskesmaslasem@gmail.com'
                    value={admin.email}
                    onChange ={(e)=>setAdmin({...admin, email:e.target.value})}
                    />
                </div>

                <div className ="mb-2">
                <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Role</label>
                    <select  
                    onChange ={(e)=>setAdmin({...admin, role:e.target.value})}
                    id="role"
                    placeholder='false'
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500 " value={false}> false</option>
                        <option className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500 " value={true}>true</option> 
                    </select>  
                    <button onClick={(e)=>saveForm(e)} 
                    type="submit"
                    className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SAVE</button>
                </div>
            </form>
         </div>
         <div className='flex flex-col items-center justify-center w-100 mt-6'>
            <button onClick={(e)=>fetchUsers(e)} className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get All Admin</button>
         </div>
         <div className='flex items-center justify-center flex-col '>
             {adminLists && adminLists.map(x=>(
              <div className ='flex items-start justify-around w-full' key={x.email}>
                {adminId != x._id?(
                  <div className ='flex items-start justify-between mt-4 w-2/3'>
                      <p className ="text-start  w-1/2"> {x.email}</p>
                      <p className ="text-right ">{x.role}</p>
                  <div className ='flex items-start justify-between space-x-4'>
                    <button onClick={(e)=>editClick(e, x)}className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-md rounded-md text-sm text-center px-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                    <button 
                     onClick={(e)=>deleteAdmin(e, x._id)}
                    className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-md rounded-md text-sm text-center px-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
                  </div>
                </div>
                ):(
                  <form className ='flex items-start justify-between mt-4 w-2/3'>
                      <input
                      value={adminEdit.email}
                      onChange={(e)=>setAmdinEdit({...adminEdit, email:e.target.value})}
                      
                      className ="text-start w-1/2 bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                      <select 
                       onChange={(e)=>setAmdinEdit({...adminEdit, role:e.target.value})}
                       value={adminEdit.role}
                       className ='flex items-center justify-end'>
                        <option
                         value={true} 

                         className ="text-right"
                         >true</option>
                        <option
                         value={false} 
                         className ="text-right"
                         >false</option>
                      </select>
                     
                      <div className ='flex items-start justify-between space-x-4'>
                   {
                    adminId?( <button onClick={(e)=>saveClick(e, x)}className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-md rounded-md text-sm text-center px-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>):( <button onClick={(e)=>editClick(e, x)}className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-md rounded-md text-sm text-center px-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">edit</button>)
                   }
                   
                    <button className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-md rounded-md text-sm text-center px-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
                  </div>
                  </form>
                )}
               
               
      
              </div>
              
             ))}
         </div>
    </div>
  )
}

export default FormAdmin