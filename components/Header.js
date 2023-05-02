import React from 'react'

const Header = () => {
  return (
    <div className='shadow-md'>
        <div className='flex justify-between items-center px-5 md:px-10 pt-5 pb-5'>
            <div className='flex justify-start w-1/3 space-x-3'>
                <input
                    type="search"
                    className='border rounded-lg hidden md:flex'
                ></input>

                <div className='flex md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
            </div>

            <div className='flex justify-center w-1/3'>
                <a href='/' className='text-4xl font-bold'>SexShop</a>
            </div>

            <div className='flex justify-end w-1/3 space-x-3'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </div>        
            </div>
        </div>

        <hr></hr>

        <div className='hidden md:flex justify-center space-x-10 px-10 py-3'>
            <div>
                <h2 className='text-center  text-gray-500 hover:text-black hover:scale-[110%] hover:cursor-pointer transition-all duration-300 '>Para Él</h2> 
            </div>

            <div>
                <h2 className='text-center  text-gray-500 hover:text-black hover:scale-[110%] hover:cursor-pointer transition-all duration-300 '>Para Ella</h2> 
            </div>

            <div>
                <h2 className='text-center  text-gray-500 hover:text-black hover:scale-[110%] hover:cursor-pointer transition-all duration-300 '>Para Parejas</h2> 
            </div>

            <div>
                <h2 className='text-center  text-gray-500 hover:text-black hover:scale-[110%] hover:cursor-pointer transition-all duration-300 '>Lencería</h2> 
            </div>

            <div>
                <h2 className='text-center  text-gray-500 hover:text-black hover:scale-[110%] hover:cursor-pointer transition-all duration-300 '>BDMS</h2> 
            </div>

            <div>
                <h2 className='text-center  text-gray-500 hover:text-black hover:scale-[110%] hover:cursor-pointer transition-all duration-300 '>Bienestar y Salud</h2> 
            </div>        
        </div>
    </div>
  )
}

export default Header