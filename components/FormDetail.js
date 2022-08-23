import styles from '../styles/Home.module.css'
import {useContext, useState} from 'react'
import { useRouter } from 'next/router';



function FormDetail({data1}) {

    const router = useRouter()

    const [data, setData] = useState(data1)
  
    const submit = async (e) => {
        e.preventDefault()
     }
   
     const deleteData = async (e) => {
        e.preventDefault()
       
        router.push('/')
    
     }

    const clearData = ()=>{
       setData({
        rm:"",
        nama:"",
        namakk:"",
        alamat:"",
        rt:"",
        rw:""
       })
    }

    let option = [
      {value : 'SODITAN', label: 'SODITAN'},
      {value : 'LASEM', label: 'LASEM'},
      {value : 'ABC', label: 'ABC'},
      {value : 'LARA', label: 'LARA'}
    
    
    
    ]
    return (
             <div className='flex flex-col justify-center  fitems-start space-y-8'>
            
                <div className="mt-1 relative rounded-md shadow-sm flex flex-start">
                    <p className='pl-2 w-28 bg-gray-50'>RM</p>
                    <input  
                     className ="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12  border-gray-500 bg-gray-100 text-lg rounded-xs" 
                     placeholder="RM"
                     type='text'
                     value={data.rm}
                     onChange ={(e)=>setData({...data, rm:e.target.value})}
                     />
                </div>
                <div className="mt-1 relative rounded-xs shadow-sm flex flex-start">
                <p className='pl-2 w-28 bg-gray-50'>NAMA</p>
                    <input 
                    type='text'
                    value={data.nama}
                    onChange ={(e)=>setData({...data, nama:e.target.value})}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12  border-gray-300 bg-gray-100 text-lg rounded-xs"
                    placeholder="NAMA"/>
                 </div>
                <div className="mt-1 relative rounded-xs shadow-sm flex flex-start">
                <p className='pl-2 w-28 bg-gray-50'>NAMA KK</p>
                   <input 
                    type='text'
                    value={data.namakk}
                     onChange ={(e)=>setData({...data, namakk:e.target.value})}
                     className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12  border-gray-300 bg-gray-100 text-lg rounded-xs"
                     placeholder="NAMA KK"/>
                </div>

              
                <div className="mt-1 relative rounded-xs shadow-sm flex flex-start">
                <p className='pl-2 w-28 bg-gray-50'>RT</p>
                    <input 
                    type='text'
                    value={data.rt}
                    onChange ={(e)=>setData({...data, rt:e.target.value})}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12  border-gray-300 bg-gray-100 text-lg rounded-xs"
                    placeholder="RT"/>
                </div>
                <div className="mt-1 relative rounded-xs shadow-sm flex flex-start">
                <p className='pl-2 w-28 bg-gray-50'>RW</p>
                   <input 
                    type='text'
                    value={data.rw}
                    onChange ={(e)=>setData({...data, rw:e.target.value})}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12  border-gray-300 bg-gray-100 text-lg rounded-xs"
                    placeholder="RW"/>
                </div>
                <div className="flex">
                <p className='pl-2 w-28 bg-gray-50'>ALAMAT</p>
                     <select 
                           id="desa"
                            name="desa" 
                            type='text'
                            value={data.alamat}
                            onChange ={(e)=>setData({...data, alamat:e.target.value})}

                            className="focus:ring-indigo-500 focus:border-indigo-500 w-full py-0 pl-2 pr-7 boparent bg-white bg-gray-100 text-lg ext-gray-500 sm:text-sm rounded-xs">
                           {option.map((x , i)=>(
                             <option key={i} value={x.value}> {x.label}</option>)
                           )} 
                     </select>
                </div>




                <div className="flex items-center justify-center space-x-4">
                    <button 
                    className='bg-gray-500 rounded text-sm text-white px-2'
                     type="submit" 
                     value="Submit"
                     onClick={(e)=>submit(e)}
                            
                    >Submit
                    </button>
                    <button 
                    className='bg-gray-500 rounded text-sm text-white px-2'
                     type="submit" 
                     value="Submit"
                     onClick={(e)=>deleteData(e)}
                            
                    >Delete
                    </button>
                </div>
             
            </div>
       

    )
}

export default FormDetail
