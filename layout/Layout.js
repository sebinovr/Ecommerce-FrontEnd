import Head from "next/head"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const Layout = ({children}) => {
  return (
    <>
        <Head>
            <title> Ecommerce </title>
            <meta name="description" content="Ecommerce" />
        </Head>

        <Header/>
            {children}
        <Footer/>

    </>
  )
}

export default Layout