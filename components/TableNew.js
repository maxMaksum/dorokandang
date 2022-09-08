import React, { useContext,  useEffect,  useRef,  useState } from 'react';
import { Store } from "./contex/myContext"
import { useRouter } from 'next/router';
import CloseIcon from '@mui/icons-material/Close';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import BorderColorIcon from '@mui/icons-material/BorderColor';
const axios = require('axios').default;

function TableNew() {

  const { addUsers, users, removeUsers, showForm, setShowForm, setUserEdit } = useContext(Store);
  const router = useRouter()
  const editData=(e, x)=>{
 
     e.preventDefault()
    const myUser = users.filter(user=>{
        return user._id == x
     })

     setUserEdit(myUser[0])
     setShowForm(!showForm)
     console.log(x)
  }

    const deleteData = async (e, customersId) => {
        e.preventDefault()
       if(customersId){
            console.log(customersId)
            const response =  fetchDelete("/api/customer/customer", {data:customersId})
            const data = await response
            await removeUsers(customersId)
            return data
        }
        
     }

        const fetchDelete = async(url, id)=>{
            console.log(url,id)
            try{
            const response = await axios.delete(url,id)
            const data = response.data
            alert(data.message)
            console.log(data.message)
            return data
          
          }
          catch (error) {
            console.error(error);
          }
          }
           


  return (
    <div className='overflow-x-auto relative'>
       
        <table className ="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-6">RM</th>
                    <th scope="col" className="py-3 px-6">NAMA</th>
                    <th scope="col" className="py-3 px-6">NAMA KK</th>
                    <th scope="col" className="py-3 px-6">ALAMAT</th>
                    <th scope="col" className= 'py-3 px-6 hidden sm-inline-flex'>RT</th>
                    <th scope="col" className= 'py-3 px-6 hidden sm-inline-flex'>RT</th>
                    <th scope="col" className= 'py-3 px-6'>ACT</th>
                </tr>
            </thead>
            <tbody>
                { users&&users.map((customer, index )=> ( 
                <tr className="bg-white border-b  bg-gray-50 text-sm sm:text-xl md:text-2xl" key={index}>
                     <td scope="col"  className = "py-4 px-6"> {customer.rm}</td>
                     <td scope="col"  className = "py-4 px-6"> {customer.nama}</td>
                     <td scope="col"  className = "py-4 px-6"> {customer.namakk}</td>
                     <td scope="col"  className = "py-4 px-6"> {customer.alamat}</td>
                     <td scope="col"  className = "py-4 px-6 hidden sm-inline-flex">{customer.rt}</td>
                     <td scope="col"  className = "py-4 px-6 hidden sm-inline-flex">{customer.rw}</td>

                     <td scope="col"  className = "py-4 px-6 flex space-x-4 sm:space-x-8">
                          <div onClick={(e)=>deleteData(e, customer._id)} className=' text-green cursor-pointer w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center'>
                             <CloseIcon />
                            </div>
                            <div  onClick={(e)=>editData(e, customer._id)} className=' cursor-pointer w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center'>
                            <BorderColorIcon />
                        </div> 
                        <div  onClick={()=>router.push(`/id/${customer._id}`)} className=' cursor-pointer w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center'>
                            <TouchAppIcon />
                        </div> 
                    </td>       
                </tr>))}
            </tbody>
        </table>
    </div>
  )
}

export default TableNew