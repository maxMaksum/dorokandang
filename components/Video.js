import styles from '../styles/Home.module.css'
import React from 'react'
import Image from 'next/image'

function Video() {
  return (
 <div class="flex flex-col overflow-hidden bg-white relative">
   
    <div class="w-full">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt=""/>
    </div>

    <div class="absolute top-0 bottom-0 left-0 bg-black bg-opacity-50 z-40 h-56 w-full sm:h-72 md:h-96 lg:h-full lg:w-full">
    </div>
 
    <div class=" absolute top-0 left 0 bg-indigo-800 bg-opacity-25 h-full w-full">
        <div className='h-full relative flex items-center justify-center'>
        <main className='flex flex-col items-center justify-center'>
            <h1 class="font-bold tracking-tight text-gray-900 text-4xl sm:text-6xl space-x-4">
                <span class="block xl:inline text-center">Welcome To</span>
                <span class="block text-gray-50 xl:inline text-center">Puskesmas LASEM</span>
          </h1>
          
            <footer className="absolute top-0 left-0">
            <h1 class="font-bold tracking-tight text-gray-900 opacity-75 space-x-4 text-2xl sm:text-4xl ">
                <span class="text-lg sm:text-xl block xl:inline text-center">Project By:</span>
                <span class="bg-green-900 block text-gray-50 xl:inline text-center p-2 rounded-md">Viky Febry Q.</span>
          </h1>
        </footer>
        </main>
        </div>
    </div>
</div>


 
  )
}

export default Video