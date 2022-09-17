import React from 'react'

const ImageQ =[
    {Title:"Lorem Ipsum", 
    Desc:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsun", 
    img : "/viky1.jpeg" },
    {Title:"Lorem Ipsum", 
    Desc:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsun", 
    img : "/viky2.jpeg" },
    {Title:"Lorem Ipsum", 
    Desc:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsun", 
    img : "/viky3.jpeg" },
    {Title:"Lorem Ipsum", 
    Desc:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsun", 
    img : "/viky1.jpeg" },
    {Title:"Lorem Ipsum", 
    Desc:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsun", 
    img : "/viky2.jpeg" },
    {Title:"Lorem Ipsum", 
    Desc:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsun", 
    img : "/viky3.jpeg" }

]

function Masonry() {
  return (
    <div className ="flex items-center justify-center w-full bg-red-500">
        <div className="columns-2 md:columns-3 lg:columns-4 w-full bg-green-500">
        {ImageQ.map(x=>(
            
            <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20 bg-yellow-500">
                <img className="w-full rounded-md" src={x.img}/>
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                <div className="relative">
                    <a className="test__link absolute inset-0" target="_blank" href="/"></a>
                    <h1 className="test__title text-3xl font-bold mb-3">Title post</h1>
                    <p className="test__author font-sm font-light">Author</p>
                </div>
                <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">#tag</span>
                </div>
                </div>
            </div> 

        ))}
         </div>
        
</div>
  )
}

export default Masonry