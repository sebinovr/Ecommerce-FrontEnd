import Image from 'next/image'

const Productos = () => {
 
  const productos = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <div className='flex justify-center md:px-10'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 px-2 '>
          {productos.map((producto) => (
            <div key={producto} className='hover:border-2' >
                <a href={`/${producto}`} >
                  <Image 
                    src={`/assets/productos/producto${producto}.webp`} 
                    width={1000} 
                    height={500} 
                    alt={`producto${producto}`}
                  />
                  
                  <div className='flex flex-col py-3 items-center transition-all duration-300 border-b-2 border-purple-600'>
                    <p className='uppercase'>Producto {producto}</p>
                    <p className='font-bold uppercase text-purple-600'>30€</p>
                  </div>
                </a>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Productos

