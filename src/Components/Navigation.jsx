import '../ComponentsCss/Navigation.css'
import User from '../assets/user.svg'
import Bars from '../assets/bars.svg'
import { useState } from "react";


export function Navigation(){
    const [open, setOpen] = useState(false);
    return(
        <nav>
            <div className='left flex items-center gap-1 font-medium md:justify-center '>
                <p className='text-black w-[35px] text-center h-[30px] rounded-[10px] font-bold bg-white flex items-center justify-center'>{'{R}'}</p>
                <p className='h-[30px] flex items-center justify-center'>ICHMON</p>
            </div>
            
            <div className='md:flex hidden  w-[50%] h-full text-[.8rem] items-center justify-center  gap-4'>
                <button>Home</button>
                <button>Education</button>
                <button>Skills</button>
                <button>Project</button>
            </div>

            <div className='right flex items-center justify-end md:justify-center'>
                <img onClick={()=>{
                    setOpen(!open)
                }} src={Bars} className=' h-[35px] md:hidden'/>  
                
                {open && <div className="fixed top-0 left-0 w-screen h-screen bg-purple-400 z-1 flex flex-col p-4">
                        <button onClick={()=>{
                    setOpen(!open)
                }}>X</button>
                    </div>}

                <div className=' hidden md:flex gap-2 items-center justify-start bg-black md:py-2 md:px-3  rounded-[50px]'>
                    <img src={User} alt="" className='h-6 lg:h-7 bg-white p-1 rounded-full'/>
                    <p className='text-[.8rem] '>Contact me</p>
                 </div>
            </div>
        </nav>
    )
}

