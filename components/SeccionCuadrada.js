import React from 'react'

const SeccionCuadrada = () => {
  return (
    <div className='grid grid-cols-2 mx-4 md:mx-0 my-4 md:my-0 gap-4 md:gap-0 md:flex md:justify-center md:space-x-5 md:w-[100%] md:px-[8rem] md:pt-0 text-white font-bold'>
        <a href='/productos/hombre' className='flex flex-col items-center w-[100%] md:w-1/6 bg-gradient-to-b from-red-300 to-red-600/80 p-2 hover:scale-[110%] transition-all duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-man" width="52" height="52" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="5" r="2" />
                <path d="M10 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />
            </svg>

            <h2 className='text-[10px] uppercase mt-[15px]'>Para</h2>
            <h1 className='text-lg uppercase mt-[-5px]'>Él</h1>

        </a>

        <a href='/productos/mujer' className='flex flex-col items-center w-[100%] md:w-1/6 bg-gradient-to-t from-red-300  to-red-600/80 p-2 hover:scale-[110%] transition-all duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-woman" width="52" height="52" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="5" r="2" />
                <path d="M10 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4" />
            </svg>

            <h2 className='text-[10px] uppercase mt-[15px]'>Para</h2>
            <h1 className='text-lg uppercase mt-[-5px]'>Ella</h1>

        </a>

        <a href='/productos/pareja' className='flex flex-col items-center w-[100%] md:w-1/6 bg-gradient-to-b from-red-300 to-red-600/80 p-2 hover:scale-[110%] transition-all duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-friends" width="52" height="52" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="7" cy="5" r="2" />
                <path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />
                <circle cx="17" cy="5" r="2" />
                <path d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4" />
            </svg>

            <h2 className='text-[10px] uppercase mt-[15px]'>Para</h2>
            <h1 className='text-lg uppercase mt-[-5px]'>Parejas</h1>

        </a>

        <a href='/productos/lenceria' className='flex flex-col items-center w-[100%] md:w-1/6 bg-gradient-to-t from-red-300 to-red-600/80 p-2 hover:scale-[110%] transition-all duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hanger" width="52" height="52" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M15 7a3 3 0 1 0 -3 3v2m0 0l-8.624 5.488a0.82 .82 0 0 0 .44 1.512h16.368a0.82 .82 0 0 0 .44 -1.512l-8.624 -5.488z" />
            </svg>

            <h1 className='text-lg uppercase' >Lencería</h1>

        </a>

        <a href='/productos/bienestar-salud' className='flex flex-col items-center w-[100%] md:w-1/6 bg-gradient-to-b from-red-300 to-red-600/80 p-2 hover:scale-[110%] transition-all duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-droplet" width="52" height="52" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z" />
            </svg>

            <h2 className='text-lg uppercase'>Bienestar y</h2>
            <h1 className='text-lg uppercase' >Salud</h1>

        </a>

        <a href='/productos/bdsm' className='flex flex-col items-center w-[100%] md:w-1/6 bg-gradient-to-t from-red-300 to-red-600/80 p-2 hover:scale-[110%] transition-all duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-unlink" width="52" height="52" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                <line x1="16" y1="21" x2="16" y2="19" />
                <line x1="19" y1="16" x2="21" y2="16" />
                <line x1="3" y1="8" x2="5" y2="8" />
                <line x1="8" y1="3" x2="8" y2="5" />
            </svg>

            <h1 className='text-lg uppercase' >BDMS</h1>

        </a>
    </div>
  )
}

export default SeccionCuadrada