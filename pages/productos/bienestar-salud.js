import React from 'react'
import Layout from '@/layout/Layout'
import ProductosBienestarSalud from '@/components/ProductosBienestarSalud'

const bienestarsalud = () => {
    return (
        <div>
            <Layout>
            <h1 className='text-3xl text-center underline underline-offset-8 p-5'>Disfruta del sexo de manera responsable y segura.</h1>
                <ProductosBienestarSalud/>                             
            </Layout>
        </div>
  )
}

export default bienestarsalud