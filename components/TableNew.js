import React, { useContext,  useEffect,  useRef,  useState } from 'react';
import { Store } from "./contex/myContext"
import { useRouter } from 'next/router';
import CloseIcon from '@mui/icons-material/Close';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import{fetchUpdate}from "./CrudFunction"
import SearchInput from "./SearchInput";
const axios = require('axios').default;

function TableNew() {

  const { users, setUsers, removeUsers, showForm, setShowForm, userEdit, setUserEdit } = useContext(Store);
  const [showEdit, setShowEdit] = useState(false)
  const [showAlamat, setShowAlamat] = useState(false)
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
    const data = await res
    const res = await fetchUpdate(`/api/customer3/${adminEdit._id}`, adminEdit)
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
  
    alert(res.data.message)
    setUsers(myUserq)
    setAdminId(false)
    return data

 }

  const addData=(e, x)=>{
    e.preventDefault()
    const myUser = users.filter(user=>{
      if(user._id == x._id){
        setUserEdit(user)
      }
      
    })
    setShowForm(!showForm)
   
 }

 const deleteData = async (e, customersId) => {
       e.preventDefault()
       if(customersId){
            const response = await fetchDelete(`/api/customer/${customersId}`, customersId)
            const data = await response
            await removeUsers(customersId)
            return data
        }
        
     }

        const fetchDelete = async(url, id)=>{
           
            try{
            const response = await axios.delete(url,id)
            const data = response.data
            alert(data.message)
            return data
          
          }
          catch (error) {
            console.error(error);
          }
         }
           
         const getAlamat =(y)=>{
            setAmdinEdit({...adminEdit, alamat: y})
            console.log(y)
          }
  return (
    <div className='overflow-x-auto relative h-screen bg-gray-50 '>

        <div className ="text-sm text-left text-gray-900 dark:text-gray-400 mt-6 ">
            <div className=
            "bg-green-500 text-sm sm:text-md grid grid-cols-12 gap-y-6 gap-x-2 place-content-center bg-green-700 my-2 h-10 mx-4 text-gray-50 px-2">

                    <p className="grid col-span-1">RM</p>
                    <p className="grid col-span-2">NAMA</p>
                    <p className="grid col-span-2">NAMA KK</p>
                    <p className="grid col-span-2">ALAMAT</p>
                    <p className= 'grid col-span-1'>RT</p>
                    <p className= 'grid col-span-1'>RW</p>
                    <p className= 'grid col-span-2'>ACTIONS</p>
            </div>
           
                { users&&users.map((customer, index )=> (
                    <div className=""> 
                        {adminId != customer._id?(
                            <div 
                                className="text-sm sm:text-md grid grid-cols-12 gap-y-6 gap-x-2 place-content-center my-2 h-10 mx-4 text-gray-900 px-2 bg-green-100 "
                                key={customer._id}>
                                    <p className="grid col-span-1"> {customer.rm}</p>
                                    <p className="grid  col-span-2 "> {customer.nama}</p>
                                    <p className="grid  col-span-2 "> {customer.namakk}</p>
                                    <p className="grid col-span-2"> {customer.alamat}</p>
                                    <p className="grid col-span-1"> {customer.rt}</p>
                                    <p className="grid col-span-1 "> {customer.rw}</p>

                                <div className='grid col-span-2'>
                                    <div className='flex justify between space-x-4'>
                                        <div onClick={(e)=>deleteData(e, customer._id)} className=' text-green cursor-pointer w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center'>
                                            <CloseIcon />
                                        </div>
                                        <div  onClick={(e)=>editData(e, customer)} className=' cursor-pointer w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center'>
                                            <BorderColorIcon />
                                        </div>
                                        <div  onClick={(e)=>addData(e, customer)} className=' cursor-pointer w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center'>
                                                <DataSaverOnIcon/>
                                        </div>
                                        <div  onClick={()=>router.push(`/id/${customer._id}`)} className=' cursor-pointer w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center'>
                                            <TouchAppIcon />
                                        </div> 
                                    </div>
                                </div>  
        
                            </div>):(
                        
                        <div 
                            className="text-sm sm:text-md grid grid-cols-12 gap-y-6 gap-x-2 place-content-center my-2 h-10 mx-4 text-gray-900 px-2 "

                            key={customer._id}>
                                <input className="grid col-span-1 bg-green-100 "
                                 type="text"
                                 onChange={(e)=>setAmdinEdit({...adminEdit, rm:e.target.value})}
                                 value = {adminEdit.rm} 
                                 />
                                <input className="grid  col-span-2 bg-green-100" 
                                 type="text"
                                 onChange={(e)=>setAmdinEdit({...adminEdit, nama:e.target.value})}
                                 value = {adminEdit.nama}
                                
                                />
                                <input 
                                 className="grid  col-span-2 bg-green-100 py-2"
                                 type="text"
                                 onChange={(e)=>setAmdinEdit({...adminEdit, namakk:e.target.value})}
                                 value = {adminEdit.namakk}/>
                                <div  className="grid  col-span-2 bg-green-100 py-2 relative ">
                                <div  className="absolute top-0 left-0 z-20  bg-green-100 text-sm">
                                    <SearchInput 
                                    getAlamat={getAlamat}
                                    alamatQ = {adminEdit.alamat}/>
                                </div>
                                </div>
                               
                                <input className="grid col-span-1 grid  col-span-1 bg-green-100 py-2" 
                                type="text"
                                onChange={(e)=>setAmdinEdit({...adminEdit, rt:e.target.value})}
                                value = {adminEdit.rt} />
                                <input className="grid col-span-1 bg-green-100 py-2 " 
                                 type="text"
                                 onChange={(e)=>setAmdinEdit({...adminEdit, rw:e.target.value})}
                                value = {adminEdit.rw} />
                            <div className='grid col-span-2 bg-green-100 py-2 px-4'>
                                    <div className='flex justify-between  '>
                                        <div onClick={(e)=>closeButton(e)} className='cursor-pointer '>
                                            Close
                                        </div>
                                        <div  onClick={(e)=>saveData(e)} className=' cursor-pointer'>
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