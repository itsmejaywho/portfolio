import Me from '../assets/me.jpg'
import Location from '../assets/location.svg'
import Phone from '../assets/phone.svg'
import Email from '../assets/email.svg'
import ResumePDF from '../assets/portfolio.pdf'
import Resume from '../assets/resume.svg'
import { motion } from "motion/react"
import { Typewriter, Cursor } from 'react-simple-typewriter'


export function Home(){
    return(
        <div className="mt-10 h-[90%] p-2 min-w-[360px] md:flex md:mt-0 md:items-center md:justify-center">

            <div className='flex flex-col text-white w-full gap-2 md:w-[50%] md:justify-center '>
                <p className='pb-2 text-[2rem]'>Hi!</p>
                <div className='flex items-baseline gap-2'>
                    <p className='text-[.9rem] lg:text-[1.2rem]'>I'm</p>
                    <p className='text-[1.4rem] font-bold text-[#d4a373] lg:text-[1.7rem]'>Richmon Jay Francisco</p>
                </div>
                <div className='text-[1.4rem] font-bold lg:text-[1.7rem]'>
                    <p>                     
                    <Typewriter
                    words={["Aspiring Fullstack Developer"]}
                    loop={true}
                    typeSpeed={90}
                    deleteSpeed={60}
                    delaySpeed={1400}
                    />
                    <Cursor cursorStyle ='|'/></p>
                </div>
                <p className='text-[.8rem] w-[80%] lg:text-[1rem]'>"I am motivated by a profound passion in technology and a strong willingness to learn."</p>

                <div className='mt-2 border-l border-amber-50 flex flex-col px-2 gap-2 py-1'>
                    <div className='flex w-full gap-2'>
                        <img src={Location} alt="Location" className='h-5 p-1 rounded-full bg-white' />
                        <p className='text-[.7rem] lg:text-[.9rem]'>85 Rev. Aglipay St. Poblacion, Mandaluyong City</p>
                    </div>
                    <div className='flex w-full gap-2'>
                        <img src={Phone} alt="Number" className='h-5 p-1 rounded-full bg-white' />
                        <p className='text-[.7rem] lg:text-[.9rem]'>09283486724</p>
                    </div>
                    <div className='flex w-full gap-2'>
                        <img src={Email} alt="Email" className='h-5 p-1 rounded-full bg-white' />
                        <p className='text-[.7rem] lg:text-[.9rem]'>rj.frncsco@gmail.com</p>
                    </div>
                </div>
                <p className='text-[.6rem] lg:text-[.7rem]'>I created this portfolio using ViteReact</p>
                <button className='p-2 bg-amber-500  text-[.7rem] lg:text-[.9rem] flex  items-center justify-center rounded-[10px] w-fit'>
                    <img src={Resume} alt="" className='h-5' />
                    <a href={ResumePDF} download="Richmon_Jay_Francisco_Resume.pdf" target="_blank" >
                        <p>Download resume</p>
                    </a>
                </button>

                <div className='h-[300px] w-full flex items-center justify-center md:hidden'>
                    <div className="h-full w-[70%] sm:w-[40%]  sm:bg-red-400 clip-hexagon bg-[#2e3b4e] flex items-center justify-center ">
                        <div className="h-[98%] w-[98%] clip-hexagon bg-[#2e3b4e] flex items-center justify-center overflow-hidden">
                            <img src={Me} alt="" className="h-full w-full object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='hidden md:flex w-[40%] items-center justify-center h-full '>
                    <div className="h-[80%] w-[90%]  sm:bg-red-400 clip-hexagon bg-[#2e3b4e] flex items-center justify-center ">
                        <div className="h-[98%] w-[98%] clip-hexagon bg-[#2e3b4e] flex items-center justify-center overflow-hidden">
                            <img src={Me} alt="" className="h-full w-full object-cover"/>
                        </div>
                    </div>
            </div>

            

        </div>
    )
}
