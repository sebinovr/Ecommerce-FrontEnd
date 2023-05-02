import Image from 'next/image'

const ProductosHombre = () => {
 
  const productos = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className='flex justify-center md:px-10'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 px-2'>
          {productos.map((producto) => (
            <div key={producto} className='hover:border-2 rounded-lg' >
                <div href={`/${producto}`}>
                  <Image 
                    src={`/assets/productoshombre/hombre${producto}.jpg`} 
                    width={1000} 
                    height={135} 
                    alt={`producto${producto}`}
                    className='h-[100%]'
                  />
                  
                  <div className='flex flex-col py-3 items-center transition-all duration-300 border-b-2 border-purple-600'>
                    <p className='uppercase'>Categoria {producto}</p>
                  </div>
                </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ProductosHombre

