import React, {useContext, useEffect, useState} from 'react'
import { Store } from "./contex/myContext"
import { useRouter } from 'next/router';

function FormAdd() {

  const { addUsers } = useContext(Store);
  const router = useRouter()
  const [dataQ, setDataQ] = useState({
    rm:"",
    nama:"",
    namakk:"",
    alamat:"",
    rt:"",
    rw:""

})
    const submit = async (e) => {
        e.preventDefault()
     }
   


     const cancelDataQ = ()=>{
      clearData()
      router.push("/")
     }

    const clearData = ()=>{
       setDataQ({
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
          <div className='w-full'>
            <p className='text-center p-2'>ADD RM</p>
            <form className='w-100 flex flex-col items-center space-y-4 '>
                <label className= "flex flex-col justify-center">
                <span className="block text-sm font-medium text-slate-700">RM</span>
                    <input  
                     className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                     focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                     disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                     invalid:border-pink-500 invalid:text-pink-600
                     focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                     placeholder="RM"
                     type='text'
                     value={dataQ.rm}
                     onChange ={(e)=>setDataQ({...dataQ, rm:e.target.value})}
                     />
                </label>
                <label className="flex flex-col justify-center">
                <span className="block text-sm font-medium text-slate-700">NAMA </span>
                    <input 
                    type='text'
                    value={dataQ.nama}
                    onChange ={(e)=>setDataQ({...dataQ, nama:e.target.value})}
                    className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    placeholder="NAMA"/>
                 </label>
                <label className="flex flex-col justify-center">
                <span className="block text-sm font-medium text-slate-700">NAMA KK</span>
                
                   <input 
                    type='text'
                    value={dataQ.namakk}
                     onChange ={(e)=>setDataQ({...dataQ, namakk:e.target.value})}
                     className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                     focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                     disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                     invalid:border-pink-500 invalid:text-pink-600
                     focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                     placeholder="NAMA KK"/>
                </label>
                <label className="flex flex-col justify-center">
                <span className="block text-sm font-medium text-slate-700">RT</span>
                
                   <input 
                    type='text'
                    value={dataQ.rt}
                    onChange ={(e)=>setDataQ({...dataQ, rt:e.target.value})}
                    className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    placeholder="RW"/>
                </label>
                <label className="flex flex-col justify-center">
                <span className ="block text-sm font-medium text-slate-700">RW</span>
                   <input 
                    type='text'
                    value={dataQ.rw}
                    onChange ={(e)=>setDataQ({...dataQ, rw:e.target.value})}
                    className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    placeholder="RW"/>
                </label>
               
                <select 
                            id="desa"
                            name="desa" 
                            type='text'
                            value={dataQ.alamat}
                            onChange ={(e)=>setDataQ({...dataQ, alamat:e.target.value})}
                            className="rounded-xs shadow-sm flex flex-start px-2"
                            >
                           {option.map((x , i)=>(
                             <option className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                             focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                             disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                             invalid:border-pink-500 invalid:text-pink-600
                             focus:invalid:border-pink-500 focus:invalid:ring-pink-500 " key={i} value={x.value}> {x.label}</option>)
                           )} 
                </select>
              


                <div className="flex items-center justify-center space-x-6">
                    <button 
                    className='flex items-center justify-center bg-emerald-500 rounded-xs text-md text-white px-3 pt-1'
                     type="submit" 
                     value="Submit"
                     onClick={(e)=>submit(e)}
                            
                    >Submit
                    </button>
                    <button 
                    className='flex items-center justify-center bg-emerald-500 rounded-xs text-md text-white px-3 pt-1'
                     type="submit" 
                     value="Submit"
                     onClick={(e)=>cancelDataQ(e)}
                            
                    >Cancel
                    </button>
                </div>
            </form>
            </div>
       

    )
}

export default FormAdd
