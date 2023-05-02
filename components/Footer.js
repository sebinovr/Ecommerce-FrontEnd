import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col space-y-5 md:space-y-0 md:flex-row md:px-10 py-3 md:py-5 md:space-x-5 justify-between'>
        {/* seccion1 - Quienes somos */}
        <div className='flex flex-col items-center px-5 md:px-0 md:w-[40%]'>
            <h1 className='text-2xl font-bold'>SexShop</h1>
            <hr></hr>
            <p className='text-justify text-sm'>Especialistas en productos para el bienestar sexual. renueva la pasión y enriquece tu intimidad a través de la sexualidad con sentidos. Cosmética erótica y sensual, lencería erótica, lubricantes, estimulantes femeninos, potenciadores masculinos, juguetes sexuales y vibradores, aceites de masaje, feromonas y muchos más ...</p>
        </div>

        {/* seccion2 - Contacto */}
        <div className='flex flex-col items-center md:items-start'>
            <h1 className='text-md font-bold'>Contacto</h1>
            <hr></hr>
            <p className='text-sm'>contacto@ecommerce.com</p>
            <p className='text-sm'>+33 7 4910 4522</p>
            <p className='text-sm'>+33 1 2345 6789</p>
        </div>

        {/* seccion3 - Servicios al cliente */}
        <div className='flex flex-col items-center md:items-start'>
            <h1 className='text-md font-bold'>Servicio Al Cliente</h1>
            <hr></hr>
            <a href='#' className='text-sm'>Preguntas Frecuentes</a>
            <a href='#' className='text-sm'>Envios y Despachos</a>
            <a href='#' className='text-sm'>Términos y Condiciones</a>
            <a href='#' className='text-sm'>Nosotros</a>
            <a href='#' className='text-sm'>Contactenos</a>
        </div>


        {/* seccion4 - Siguenos */}
        <div className='flex flex-col items-center md:items-start'>
            <h1 className='text-md font-bold'>Siguenos</h1>
            <hr></hr>
            <a href='#' className='text-sm'>Facebook</a>
            <a href='#' className='text-sm'>Instagram</a>
            <a href='#' className='text-sm'>Whatsapp</a>
        </div>


    </div>
  )
}

export default Footer