
import github from "../svg/connect/bxl-github.svg.svg"
import instagram from "../svg/connect/bxl-instagram.svg.svg"
import linkedin from "../svg/connect/bxl-linkedin.svg.svg"

function Connect (){
    return(
        <>
        <section className="w-full xl:h-[400px] h-[300px] xl:pl-[90px] flex xl:items-start flex-col items-center pt-[80px] border-b border-slate-800 "> 
            <div>
                    <h1 className="xl:w-[800px] w-[343px] md:w-[400px] md:h-[60px]  h-[43px] xl:h-[76px] mb-0 font-bebas text-[#FFFFFF] md:text-[60px] text-[43px]  xl:text-[76px]">
                        LET'S CONNECT
                    </h1>
                    <p className="font-manrope mt-[15px]  xl:mt-[20px] mb-0  text-[18px] leading-[150%] text-[#C7C7C7]">
                        Say Hello @ <span className=" text-slate-400">   yusufabiola555@gmail.com</span>
                    </p>
                    <p className="font-manrope mt-[15px]  xl:mt-[10px] mb-0  text-[18px] leading-[150%] text-[#C7C7C7]">
                      Tel:   <span className="text-slate-400"> +2349162034643, +2348109709390</span>
                    </p>
                
                    <div className="flex gap-[24px] mt-[20px] xl:mt-[40px]">
                        <a href="https://linkedin.com/in/abioladblogger"><img src={linkedin} alt="linkedin icon" /></a>
                    <a href="https://github.com/Bigbilly-github"> <img src={github} alt="github icon" /></a>
                        <a href="https://instagram.com/abioladblogger"><img src={instagram} alt="instagram icon" /></a>
                

                    </div>

            </div>
           


        </section>
        </>
    )
}
export default Connect