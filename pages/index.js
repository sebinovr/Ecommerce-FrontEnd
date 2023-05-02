import Layout from "@/layout/Layout"
import CarrouselInicio from "@/components/CarrouselInicio"
import SeccionCuadrada from "@/components/SeccionCuadrada"
import Productos from "@/components/Productos"

export default function Home() {
  return (
    <div>
      <Layout>
        <CarrouselInicio/>

        <h1 className="text-center text-xl md:text-3xl underline underline-offset-8 p-5">Categorías</h1>
        <SeccionCuadrada/>

        <h1 className="text-center text-xl md:text-3xl underline underline-offset-8 p-5">Productos Destacados</h1>
        <Productos/>

      </Layout>
    </div>
  )
}
