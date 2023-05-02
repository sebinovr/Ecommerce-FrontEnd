import React from 'react'
import Layout from '@/layout/Layout'
import ProductosLenceria from '@/components/ProductosLenceria'

const lenceria = () => {
    return (
        <div>
            <Layout>   
                <h1 className='text-3xl text-center underline underline-offset-8 p-5'>Sorprende a tu pareja con la lencería más sexy.</h1>
                <ProductosLenceria/>                             
            </Layout>
        </div>
    )
}

export default lenceria