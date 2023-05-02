import React from 'react'
import Layout from '@/layout/Layout'
import ProductosMujer from '@/components/ProductosMujer'

const mujer = () => {
    return (
        <div>
            <Layout>
                <h1 className='text-3xl text-center underline underline-offset-8 p-5'>Productos para el placer femenino.</h1>
                <ProductosMujer/>            
            </Layout>
        </div>
  )
}

export default mujer