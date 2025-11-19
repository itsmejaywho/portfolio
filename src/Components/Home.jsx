import Me from '../assets/me.jpg'
import { Typewriter, Cursor } from 'react-simple-typewriter'


export function Home(){
    return (
        <div className="text-white justify-center gap-5 h-[90%] flex  w-full">
            <div className="w-[40%] h-full ">
                <div className='h-[40%] flex flex-col justify-end '>
                    <p className='pb-8 text-[2rem]'>Hi!</p>
                    <div className='flex items-baseline gap-2'>
                        <p className='text-[1.4rem]'>I'm</p>
                        <p className=' font-bold text-[1.8rem] text-[#d4a373]'>Richmon Jay Francisco</p>
                    </div>

                    <div className='flex items-baseline gap-2 font-bold text-[2.2rem]'>
                        <p>                     
                        <Typewriter
                        words={["Fullstack Developer"]}
                        loop={true}
                        typeSpeed={90}
                        deleteSpeed={60}
                        delaySpeed={1400}
                        />
                    <Cursor cursorStyle ='|'/></p>
                    </div>
                </div>
                <div className='h-[40%]'></div>
                <div className='h-[20%]'></div>
            </div>


            <div className="w-[40%] h-full  flex items-center justify-start">
                 <div className="h-[80%] w-[80%] clip-hexagon bg-[#2e3b4e] flex items-center justify-center overflow-hidden">
                        <div className="h-[98%] w-[98%] clip-hexagon bg-[#2e3b4e] flex items-center justify-center overflow-hidden">
                            <img src={Me} alt="" className="h-full w-full object-cover"/>
                        </div>
                </div>
            </div>
        </div>
    )
}
