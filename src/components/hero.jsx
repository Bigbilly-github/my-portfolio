
import image from "../svg/hero/bg.svg"
import linkedin from "../svg/hero/linkedin.svg"
import github from "../svg/hero/github.svg"
import image2 from "../img/hero/abiola.png"

function Hero (){


    const scrollToPositionContact = () => {
        window.scrollTo({
          top: 5050, // Adjust this value to scroll to your desired height
          behavior: "smooth",
        });
      };
    return(
        <>
        <section className="xl:mt-[126px] mt-[156px] w-full flex justify-center  items-center">
            <div >
                <h1 className=" xl:w-[644px] md:w-[704px] w-[393px] mb-0  md:h-[100px] h-[60px] xl:h-[182px] font-bebas font-normal text-[57px] md:text-[101px] leading-[90%] text-[#FFFFFF]">
                HI, I AM <br className="hidden xl:block"/>YUSUF ABIOLA.
                </h1>
                <p className="font-manrope mb-0  mt-[10px] text-[18px] leading-[150%] text-[#C7C7C7] w-[393px] xl:w-[544px]  md:w-[704px] h-[78px] md:h-[54px]">
                A front-end developer passionate about building accessible and user friendly websites.
                </p>
                <div className="flex gap-[16px] mt-[20px] md:mt-[40px]">
                    <button onClick={scrollToPositionContact} className="w-[187px] h-[54px] bg-[#D3E97A] hover:text-[#D3E97A] rounded-[100px] border-0 text-center  font-manrope font-bold text-[16px] leading-[100%] hover:bg-[#0A0A0A] text-[#0A0A0A]">
                        CONTACT ME
                    </button>
                   <a href="https://linkedin.com/in/abioladblogger"  ><img src={linkedin} alt="linkedin icon" /></a> 
                    <a href="https://github.com/Bigbilly-github"><img src={github} alt="github icon" /></a>
                </div>

            </div>
            <div className="relative hidden xl:block">
                <img src={image} alt="image of yusuf abiola" />
                <img src={image2} alt="" className="absolute top-0 rounded-[15px] w-[600px]  h-[750px]" />
            </div>
           
        </section>

        </>
    )
}

export default Hero