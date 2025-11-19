import '../ComponentsCss/Navigation.css'
import User from '../assets/user.svg'

export function Navigation(){
    return(
    <nav className="navigation text-[#f6fbfc]">
        <div className='w-[25%] h-full flex justify-end items-center text-[1.1rem] font-bold gap-1'>
            <p className='text-black w-[35px] text-center h-[30px] rounded-[10px] bg-white '>{'{R}'}</p>
            <p className='h-[30px]'>ICHMON</p>
            <p></p>
        </div>
        <div className='w-[50%] h-full text-[.8rem] items-center justify-center flex gap-4'>
            <button>Home</button>
            <button>Education</button>
            <button>Skills</button>
            <button>Project</button>
        </div>
        <div className='w-[25%] h-full flex items-center text-[.8rem] cursor-pointer'>
            <div className='flex gap-2 items-center justify-start bg-black py-2 px-3  rounded-[50px]'>
                <img src={User} alt="" className='h-[30px] bg-white p-1 rounded-full'/>
                <p>Contact Me</p>
            </div>
        </div>
    </nav>
    )
}
