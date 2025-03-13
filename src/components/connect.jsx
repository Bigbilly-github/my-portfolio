
import github from "../svg/connect/bxl-github.svg.svg"
import instagram from "../svg/connect/bxl-instagram.svg.svg"
import linkedin from "../svg/connect/bxl-linkedin.svg.svg"

function Connect (){
    return(
        <>
        <section className="w-full h-[400px] pl-[90px]  pt-[80px] border-b border-slate-800 "> 
            <h1 className="w-[800px] h-[76px] mb-0 font-bebas text-[#FFFFFF] text-[76px]">
                LET'S CONNECT
            </h1>
            <p className="font-manrope  mt-[20px] mb-0 text-[18px] leading-[150%] text-[#C7C7C7]">
                Say Hello at <span className="underline text-slate-400"> yusufabiola555@gmail.com</span>
            </p>
          
            <div className="flex gap-[24px] mt-[40px]">
                <a href="https://linkedin.com/in/abioladblogger"><img src={linkedin} alt="linkedin icon" /></a>
               <a href="https://github.com/Bigbilly-github"> <img src={github} alt="github icon" /></a>
                <a href="https://instagram.com/abioladblogger"><img src={instagram} alt="instagram icon" /></a>
         

            </div>


        </section>
        </>
    )
}
export default Connect