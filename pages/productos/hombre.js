import React from 'react'
import Layout from '@/layout/Layout'
import ProductosHombre from '@/components/ProductosHombre'

const hombre = () => {
  return (
    <div>
        <Layout>
            <h1 className='text-3xl text-center underline underline-offset-8 p-5'>Productos para el placer masculino.</h1>
            <ProductosHombre/>
        </Layout>
    </div>
  )
}

export default hombre