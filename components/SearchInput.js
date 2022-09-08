import React from 'react'
import { useState } from 'react'
import alamat from "../alamat"

function SearchInput({getAlamat}) {
     const [query, setQuery] = useState("")
     const [desa, setDesa] = useState("")
    
     const getDesa = (e, user)=>{
        e.preventDefault()
        setQuery(user)
        getAlamat(user)
      
     }

  return (
    
   <div className="app">
     <input
        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
        placeholder="Search Alamat"
        value={query}
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <ul className="list">
        {alamat.filter((asd) =>
          asd.toLowerCase().includes(query)
        ).map((user, index) => (
         <li className="mb-2 " key={index}>
            {query == ""?"":
            <butto className="cursor-pointer"  onClick ={(e)=>getDesa(e, user)}>{user}</butto>}
          </li>
         
        ))}
      </ul>
    </div>
  )
}

export default SearchInput