
import image from "../svg/hero/bg.svg"
import linkedin from "../svg/hero/linkedin.svg"
import github from "../svg/hero/github.svg"

function Hero (){
    return(
        <>
        <section className="mt-[126px] w-full flex justify-center  items-center">
            <div>
                <h1 className="w-[644px] mb-0 h-[182px] font-bebas font-normal text-[101px] leading-[90%] text-[#FFFFFF]">
                HI, I AM <br/>YUSUF ABIOLA.
                </h1>
                <p className="font-manrope mb-0  mt-[10px] text-[18px] leading-[150%] text-[#C7C7C7]  w-[544px] h-[54px]">
                A front-end developer passionate about building accessible and user friendly websites.
                </p>
                <div className="flex gap-[16px] mt-[40px]">
                    <button className="w-[187px] h-[54px] bg-[#D3E97A] rounded-[100px] border-0 text-center  font-manrope font-bold text-[16px] leading-[100%] text-[#0A0A0A]">
                        CONTACT ME
                    </button>
                   <a href=""><img src={linkedin} alt="linkedin icon" /></a> 
                    <a href=""><img src={github} alt="github icon" /></a>
                </div>

            </div>
            <div>
                <img src={image} alt="image of yusuf abiola" />
            </div>
           
        </section>

        </>
    )
}

export default Hero