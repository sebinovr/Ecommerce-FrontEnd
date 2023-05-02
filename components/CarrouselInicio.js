import {useState} from 'react'
import Image from 'next/image'

const CarrouselInicio = () => {
    const [valor, setValor] = useState(1);

    function cambiarState(){
        if(valor===1){
            setTimeout(()=>{
                setValor(2)
            },5000)
        }
        if(valor===2){
            setTimeout(()=>{
                setValor(3)
            },5000)
        }
        if(valor===3){
            setTimeout(()=>{
                setValor(1)
            },5000)
        }
        return valor
    }
    cambiarState();


    return (
        <div className='flex justify-center overflow-x-hidden w-[100%] h-[30vh] sm:h-[45vh] md:h-[70vh] mt-0 md:mt-10'>
            <Image 
                src='/assets/inicio/inicio01.jpg' 
                width={1000} 
                height={500} 
                alt='inicio01'
                className={valor===1 ? 'absolute opacity-100 transition-all duration-1000 w-[100%] md:w-[80%] h-[30vh] sm:h-[45vh] md:h-[70vh]': 'absolute opacity-0 transition-all duration-1000 w-[100%] md:w-[80%] h-[30vh] sm:h-[45vh] md:h-[70vh]'}/>

            <Image 
                src='/assets/inicio/inicio02.jpg' 
                width={1000} 
                height={500} 
                alt='inicio02'
                className={valor===2 ? 'absolute opacity-100 transition-all duration-1000 w-[100%] md:w-[80%] h-[30vh] sm:h-[45vh] md:h-[70vh]': 'absolute opacity-0 transition-all duration-1000 w-[100%] md:w-[80%] h-[30vh] sm:h-[45vh] md:h-[70vh]'}/>


            <Image 
                src='/assets/inicio/inicio03.jpg' 
                width={1000} 
                height={500} 
                alt='inicio03'
                className={valor===3 ? 'absolute opacity-100 transition-all duration-1000 w-[100%] md:w-[80%] h-[30vh] sm:h-[45vh] md:h-[70vh]': 'absolute opacity-0 transition-all duration-1000 w-[100%] md:w-[80%] h-[30vh] sm:h-[45vh] md:h-[70vh]'}/>

        </div>
    
  )
}

export default CarrouselInicio