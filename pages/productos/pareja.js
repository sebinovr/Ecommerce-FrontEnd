import React from 'react'
import Layout from '@/layout/Layout'
import ProductosPareja from '@/components/ProductosPareja'

const pareja = () => {
    return (
        <div>
            <Layout>
                <h1 className='text-3xl text-center underline underline-offset-8 p-5'>Disfruta de la sensualidad en pareja con los siguientes productos.</h1>
                <ProductosPareja/> 
            </Layout>
        </div>
  )
}

export default pareja