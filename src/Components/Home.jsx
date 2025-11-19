import Me from '../assets/me.jpg'

export function Home(){
    return (
        <div className="text-white h-[90%] flex border w-full">
            <div className="w-[60%] h-full"></div>
            <div className="w-[40%] h-full border flex items-center justify-start">
                 <div className="h-[80%] w-[80%] clip-hexagon bg-[#2e3b4e] flex items-center justify-center overflow-hidden">
                        <div className="h-[98%] w-[98%] clip-hexagon bg-[#2e3b4e] flex items-center justify-center overflow-hidden">
                            <img src={Me} alt="" className="h-full w-full object-cover"/>
                        </div>
                </div>
            </div>
        </div>
    )
}
