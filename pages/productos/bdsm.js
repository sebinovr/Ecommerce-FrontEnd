import React from 'react'
import Layout from '@/layout/Layout'
import ProductosBDSM from '@/components/ProductosBDSM'

const bdsm = () => {
    return (
        <div>
            <Layout>
                <h1 className='text-3xl text-center underline underline-offset-8 p-5'>Disfruta de tus deseos BDSM con los siguientes productos.</h1>
                <ProductosBDSM/>      
            </Layout>
        </div>
  )
}

export default bdsm