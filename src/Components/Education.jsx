import { motion } from "framer-motion";

// export function Education() {
//   return (
//     <div className="h-[500px] w-full bg-violet-500 mt-2 flex items-center justify-evenly">

    // <motion.div 
    //     className="w-[30%] h-[50%] bg-black"
    //     initial={{ opacity: 0, x: -150 }}
    //     whileInView={{ opacity: 1, x: 0 }}
    //     viewport={{ once: false, amount: 0.2 }} 
    //     transition={{ duration: 1, ease: "easeOut" }}
    // >
    //   <p className="text-white">HELLO CHANO</p>
    // </motion.div>

//     <motion.div
//         className="w-[30%] h-[50%] bg-black"
//         initial={{ opacity: 0, x: 150 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: false, amount: 0.2 }} 
//         transition={{ duration: 1, ease: "easeOut" }}
//       />
//     </div>
//   );
// }


import EducDiv from '../global/educationDIv'
import MockDiv from '../global/mockDivs'

export function Education() {
  return(
    <>
      <div className="w-screen h-screen flex flex-col gap-2 ">
            <motion.div 
                className="w-full gap-2 h-[20%]  items-center flex justify-center flex-col"
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} 
                transition={{ duration: 1, ease: "easeOut" }}
            >
              <p className="text-white text-[1.7rem] font-bold">Educational Background</p>
              <p className="text-white text-center w-[80%]text-[1rem]">My educational background reflects my commitment to continuous learning and personal growth, equipping me with the knowledge and skills needed to pursue my chosen field in technology.</p>
            </motion.div>


          <motion.div className="h-[80%] w-full  flex items-center justify-between px-4 gap-10"
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} 
                transition={{ duration: 1, ease: "easeOut" }}>
                
                <div className="hello h-full  w-full flex flex-col items-end">
                  <EducDiv location={-100} School='Dona Pilar C Gonzaga Elementary School'
                   SY='2009-2015' City='Mandaluyong' title='Elementary'/>
                    <MockDiv location={-100}/>
                  <EducDiv location={-100} School='San Felipe Neri Parochial School'
                   SY='2019-2021' City='Mandaluyong' title='Senior High School'/>
                    <MockDiv location={-100}/>
                </div>
                
                <div className="bg-white w-1.5 h-full"></div>
                
                <div className="hello h-full  w-full flex flex-col items-start">
                    <MockDiv location={100}/>
                  <EducDiv location={100} School='Mandaluyong High School'
                   SY='2015-2019' City='Mandaluyong' title='Junior High School'/>
                    <MockDiv location={100}/>
                  <EducDiv location={100} School='Technological University of the Philippines'
                   SY='2022-2026' City='Manila' title='College'/>
                </div>

          </motion.div>
                

      </div>
    </>
  )
}