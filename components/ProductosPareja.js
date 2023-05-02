import Image from 'next/image'

const ProductosPareja = () => {
 
  const productos = Array.from({ length: 4 }, (_, index) => index + 1);

  return (
    <div className='flex justify-center md:px-10'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 px-2'>
          {productos.map((producto) => (
            <div key={producto} className='border hover:border-4' >
                <a href={`/${producto}`}>
                  <Image 
                    src={`/assets/productospareja/pareja${producto}.jpg`} 
                    width={1000} 
                    height={500} 
                    alt={`producto${producto}`}
                  />
                  
                  <div className='flex flex-col py-3 items-center transition-all duration-300'>
                    <p className='uppercase'>Categoria {producto}</p>
                  </div>
                </a>
            </div>
          ))}
      </div>
    </div>
  )
}


export default ProductosPareja

