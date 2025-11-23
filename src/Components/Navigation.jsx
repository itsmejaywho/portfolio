import '../ComponentsCss/Navigation.css'
import User from '../assets/user.svg'
import Burger from '../assets/burger.svg'

export function Navigation(){
    return(
    <nav className="navigation text-[#f6fbfc]">
        <div className='flex w-[50%] sm:w-[25%] h-full justify-start sm:justify-center items-center text-[1.1rem] font-medium gap-1'>
            <p className='text-black w-[35px] text-center h-[30px] rounded-[10px] font-bold bg-white '>{'{R}'}</p>
            <p className='h-[30px]'>ICHMON</p>
            <p></p>
        </div>
        <div className='hidden sm:flex w-[50%] h-full text-[.8rem] items-center justify-center  gap-4'>
            <button>Home</button>
            <button>Education</button>
            <button>Skills</button>
            <button>Project</button>
        </div>
        <div className='hidden sm:w-[25%] h-full justify-end sm:justify-center sm:flex items-center text-[.8rem] cursor-pointer'>
            <div className='flex gap-2 items-center justify-start bg-black py-2 px-3  rounded-[50px]'>
                <img src={User} alt="" className='h-[30px] bg-white p-1 rounded-full'/>
                <p>Contact me</p>
            </div>
        </div>

        <div className='sm:hidden flex items-center justify-center'>
            <img src={Burger} alt=""  className='h-8 w-8'/>
        </div>

    </nav>
    )
}
