import React, { useContext,  useEffect,  useRef,  useState } from 'react';
import { Store } from "./contex/myContext"
import { useRouter } from 'next/router';
import CloseIcon from '@mui/icons-material/Close';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import{fetchAdd, fetchRead, fetchUpdate, fetchDelete }from "./CrudFunction"

const axios = require('axios').default;

function TableNew() {

  const { addUsers, users, removeUsers, showForm, setShowForm, userEdit, setUserEdit } = useContext(Store);
  const [adminLists, setAdminLists] = useState()
  const [adminId, setAdminId] = useState(null)
  const [adminEdit, setAmdinEdit] = useState({})
  
  const router = useRouter()

  const editData=(e, x)=>{
     e.preventDefault()
     setAdminId(x)
    const myUser = users.filter(user=>{
        return user._id == x
     })

     setUserEdit(myUser[0])
     setShowForm(!showForm)
     console.log(x)
  }

  const addData=(e, x)=>{
    e.preventDefault()
    const myUser = users.filter(user=>{
       return user._id == x
    })

    setUserEdit(
        {...users[0],nama:""}
        
        )
    setShowForm(!showForm)
   
 }

    const deleteData = async (e, customersId) => {
       e.preventDefault()
       if(customersId){
            console.log(customersId)
            const response = await fetchDelete(`/api/customer/${customersId}`, customersId)
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
    <div className='overflow-x-auto relative bg-yellow-700 w-full '>

        <div className ="text-sm text-left text-gray-500 dark:text-gray-400">
            <div className=
            "text-xs text-gray-700 uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400 flex justify-between">
                <div></div>
                    <p className="py-3 px-2">RM</p>
                    <p className="py-3 px-2">NAMA</p>
                    <p className="py-3 px-2">NAMA KK</p>
                    <p className="py-3 px-2">ALAMAT</p>
                    <p className= 'py-3 hidden sm-inline-flex'>RT</p>
                    <p className= 'py-3 hidden sm-inline-flex'>RT</p>
                    <p className= 'py-3 px-2'>ACT</p>
            </div>
           
                { users&&users.map((customer, index )=> (
                    <div> 
                    {adminId != customer._id?(
                    <div 
                        className="bg-yellow-500 text-sm sm:text-xl grid grid-cols-12 "
                         key={customer._id}>
                            <p className="grid col-span-1 col-start-2 bg-yellow-500"> {customer.rm}</p>
                            <p className="grid  col-span-2 bg-green-500"> {customer.nama}</p>
                            <p className="grid  col-span-2 bg-green-500"> {customer.namakk}</p>
                            <p className="grid col-span-2 bg-red-500"> {customer.alamat}</p>
                            <p className="grid col-span-1 bg-indigo-700"> {customer.rt}</p>
                            <p className="grid col-span-1 bg-blue-500"> {customer.rw}</p>

                        <div className='grid grid-cols-3'>
                            <div onClick={(e)=>deleteData(e, customer._id)} className=' text-green cursor-pointer w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center hidden'>
                                <CloseIcon />
                            </div>
                             <div  onClick={(e)=>editData(e, customer._id)} className=' cursor-pointer w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center'>
                                <BorderColorIcon />
                            </div>
                            <div  onClick={(e)=>addData(e, customer._id)} className=' cursor-pointer w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center'>
                                    <DataSaverOnIcon/>
                            </div>
                            <div  onClick={()=>router.push(`/id/${customer._id}`)} className=' cursor-pointer w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center'>
                                <TouchAppIcon />
                            </div> 
                        </div>  
  
                    </div>):(
                        
                    <div 
                    className="bg-yellow-500 text-sm sm:text-xl grid grid-cols-12 gap-4 "
                     key={customer._id}>
                        <input className="grid col-span-1 col-start-2 space-y-2 " value = {customer.rm} />
                        <input className="grid  col-span-2 space-y-2" value = {customer.nama} />
                        <input className="grid  col-span-2 space-y-2 " value = {customer.namak}/>
                        <input className="grid col-span-2 space-y-2" value = {customer.alamat} />
                        <input className="grid col-span-1 space-y-2" value = {customer.rt} />
                        <input className="grid col-span-1 " value = {customer.rw} />

                    <div className='grid grid-cols-3'>
                        <div onClick={(e)=>deleteData(e, customer._id)} className=' text-green cursor-pointer w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center hidden'>
                            <CloseIcon />
                        </div>
                        <div  onClick={(e)=>addData(e, customer._id)} className=' cursor-pointer w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center'>
                                <DataSaverOnIcon/>
                        </div>
                         
                    </div>  

                </div>
                    )
                    }
                </div>  
                ))}
            </div>
    </div>
  )
}

export default TableNew