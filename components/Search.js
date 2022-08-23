import { Store } from "./contex/myContext"
import { useContext, useEffect, useState } from 'react'
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useRouter } from 'next/router';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useSession } from "next-auth/react";
import { collection, addDoc, doc, getDoc, where, query, getDocs,  } from "firebase/firestore";
import dataQ  from "../dataQ"
const axios = require('axios').default;
import {db} from "../firebaseConfig"

function Search() {

  
    const { addUsers, readUsers, users, setUsers } = useContext(Store);
    const {data: session, status} = useSession()
    
    useEffect(()=>{
      if(!session){
          router.push("/login")
      }
  },[])

    const router = useRouter()
    const [showSearch, setShowSearch] = useState(true)

    const [data, setData] = useState({
        rm:"",
        nama:"",
        namakk:"",
        alamat:""

    })
 
    const Search = async (e) => {
        e.preventDefault()
        console.log(data)
        fetchSearch("/api/customer/customer",{data})
       
         
     }


    const fetchSearch = async(url, x)=>{
        try{
        const response = await axios.post(url, x)
        const {respond1} = await response.data
        console.log(respond1)
        addUsers(respond1)
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

        <div className='flex flex-col justify-center items-start'>
            <div className='flex flex-col items-center mb-2 py-2 relative w-full relative'>
                <div className='flex items-center justify-center space-x-2 w-full'>
                    <div className='flex items-center justify-center rounded animate-bounce '>
                       <KeyboardDoubleArrowDownIcon onClick={
                                () => setShowSearch(!showSearch)
                            } />
                    </div>
                    <div className ="w-5/6">
                        <input 
                        type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search RM..."
                        value={data.rm}
                        onChange ={(e)=>setData({...data, rm:e.target.value})}
                        
                        
                        />
                    </div>

                    <button 
                    className='flex items-center align-center'
                    type="submit" 
                    value="Submit"
                    onClick={(e)=>Search(e)}
                    > <SearchRoundedIcon /></button>
                </div>

                <div className={
                    showSearch ? 'hidden' : 'block text-black absolute left-18 top-14 space-y-4 rounded w-5/6' 
                }>
              
                    <div className=" rounded-sm shadow-sm">
                        <input 
                        value={data.nama}
                        onChange ={(e)=>setData({...data, nama:e.target.value})}
                        type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Nama..."/>
                    </div>
                    <div className="rounded-sm shadow-sm">
                        <input 
                        type='text'
                        value={data.namakk}
                        onChange ={(e)=>setData({...data, namakk:e.target.value})}
                        id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search NAMA KK..." />
                    </div>
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Alamat</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        
                        {option.map((x , i)=>(
                             <option className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                             focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                             disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                             invalid:border-pink-500 invalid:text-pink-600
                             focus:invalid:border-pink-500 focus:invalid:ring-pink-500 " key={i} value={x.value}> {x.label}</option>)
                           )} 
                        </select>

                    
                </div>
            </div>
            
        </div>

    )
}

export default Search
