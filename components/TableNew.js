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

  const { addUsers, updateUsers, users, removeUsers, showForm, setShowForm, userEdit, setUserEdit } = useContext(Store);
  const [showEdit, setShowEdit] = useState(false)
  const [adminId, setAdminId] = useState(null)
  const [adminEdit, setAmdinEdit] = useState({})
  
const router = useRouter()

const closeButton = (e)=>{
    e.preventDefault()
    setAdminId(null)

}

const editData=(e, x)=>{
    e.preventDefault()
    setShowEdit(true)
    setAdminId(x._id)
    setAmdinEdit(x)
    const myUser = users.filter(user=>{
        return user._id == x._id
     })
     setUserEdit(myUser[0])
  }

  const saveData=async (e)=>{
    e.preventDefault()
   
    const res = await fetchUpdate(`/api/customer/${adminEdit._id}`, adminEdit)
    const data = await res
    
    if(data){
      updateUsers(adminEdit._id, adminEdit)
    }
    setAdminId(false)
    return data

 }

  const addData=(e, x)=>{
    e.preventDefault()
 
    console.log("...add data", x)
    // console.log(users)

    const myUser = users.filter(user=>{
      if(user._id == x._id){
        console.log("---",user)
        setUserEdit(user)
      }
      
    })

   
    setShowForm(!showForm)
   
 }

 console.log(".......",userEdit)
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
    <div className='overflow-x-auto relative '>

        <div className ="text-sm text-left text-gray-500 dark:text-gray-400 bg-yellow-500 ">
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
                    <div className=""> 
                        {adminId != customer._id?(
                            <div 
                                className=" bg-gray-50 text-sm sm:text-xl grid grid-cols-12 gap-y-6 gap-x-2 place-content-center  "
                                key={customer._id}>
                                    <p className="grid col-span-1"> {customer.rm}</p>
                                    <p className="grid  col-span-2 "> {customer.nama}</p>
                                    <p className="grid  col-span-2 "> {customer.namakk}</p>
                                    <p className="grid col-span-2"> {customer.alamat}</p>
                                    <p className="grid col-span-1"> {customer.rt}</p>
                                    <p className="grid col-span-1 "> {customer.rw}</p>

                                <div className='grid col-span-1'>
                                    <div className='flex space-x-4'>
                                        <div onClick={(e)=>deleteData(e, customer._id)} className=' text-green cursor-pointer w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center'>
                                            <CloseIcon />
                                        </div>
                                        <div  onClick={(e)=>editData(e, customer)} className=' cursor-pointer w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center'>
                                            <BorderColorIcon />
                                        </div>
                                        <div  onClick={(e)=>addData(e, customer)} className=' cursor-pointer w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center'>
                                                <DataSaverOnIcon/>
                                        </div>
                                        <div  onClick={()=>router.push(`/id/${customer._id}`)} className=' cursor-pointer w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center'>
                                            <TouchAppIcon />
                                        </div> 
                                    </div>
                                </div>  
        
                            </div>):(
                        
                        <div 
                            className=" bg-gray-50 text-sm sm:text-xl grid grid-cols-12 gap-x-4  place-content-center "

                            key={customer._id}>
                                <input className="grid col-span-1 bg-gray-100 "
                                 type="text"
                                 onChange={(e)=>setAmdinEdit({...adminEdit, rm:e.target.value})}
                                 value = {adminEdit.rm} 
                                 />
                                <input className="grid  col-span-2 bg-gray-100" 
                                 type="text"
                                 onChange={(e)=>setAmdinEdit({...adminEdit, nama:e.target.value})}
                                 value = {adminEdit.nama}
                                
                                />
                                <input className="grid  col-span-2 bg-gray-100"
                                 type="text"
                                 onChange={(e)=>setAmdinEdit({...adminEdit, namakk:e.target.value})}
                                 value = {adminEdit.namakk}/>
                                <input className="grid col-span-2" 
                                 type="text"
                                 onChange={(e)=>setAmdinEdit({...adminEdit, alamat:e.target.value})}
                                value = {adminEdit.alamat} />
                                <input className="grid col-span-1" 
                                type="text"
                                onChange={(e)=>setAmdinEdit({...adminEdit, rt:e.target.value})}
                                value = {adminEdit.rt} />
                                <input className="grid col-span-1 " 
                                 type="text"
                                 onChange={(e)=>setAmdinEdit({...adminEdit, rw:e.target.value})}
                                value = {adminEdit.rw} />
                            <div className='grid col-span-1'>
                                    <div className='flex space-x-4 '>
                                        <div onClick={(e)=>closeButton(e)} className=' text-green cursor-pointer rounded-full bg-gray-100 '>
                                            Close
                                        </div>
                                        <div  onClick={(e)=>saveData(e)} className=' cursor-pointer w-5 h-5 rounded-full bg-gray-100'>
                                            Save
                                     </div>
                                </div>        
                            </div>  
                        </div>
                    )}
                </div>  
                ))}
            </div>
    </div>
  )
}

export default TableNew