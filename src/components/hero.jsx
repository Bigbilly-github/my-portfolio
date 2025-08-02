import image from "../svg/hero/bg.svg";
import linkedin from "../svg/hero/linkedin.svg";
import github from "../svg/hero/github.svg";
import image2 from "../img/hero/abiola.png";
import { motion } from "framer-motion";

function Hero() {
  const scrollToPositionContact = () => {
    window.scrollTo({
      top: 7050,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="xl:mt-[126px] mt-[156px] w-full flex justify-center  items-center">
        <motion.div
          className="flex items-center flex-col xl:items-start"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <h1 className=" xl:w-[644px] md:w-[704px] w-[353px] lg:text-left text-center sm:w-[393px] mb-0  md:h-[100px] h-[40px] sm:h-[60px] xl:h-[182px] font-bebas font-normal sm:text-[57px] text-[36px] md:text-[101px] leading-[90%] text-[#FFFFFF]">
            HI, I AM <br className="hidden xl:block" />
            YUSUF ABIOLA.
          </h1>
          <p className="font-manrope mb-0  mt-[10px] sm:text-[18px] lg:text-left text-center leading-[150%] text-[#C7C7C7]  sm:w-[393px] w-[353px] xl:w-[544px]  md:w-[704px] sm:h-[78px] h-[50px] md:h-[54px]">
            A front-end developer passionate about building accessible and user
            friendly websites.
          </p>
          <div className="flex gap-[16px] mt-[20px] md:mt-[40px]">
            <button
              onClick={scrollToPositionContact}
              className="py-[10px] px-[24px] active:bg-black active:text-black  h-[54px] bg-[#D3E97A] hover:text-[#D3E97A] rounded-[100px] border-0 text-center  font-manrope font-bold text-[16px] leading-[100%] hover:bg-[#0A0A0A] text-[#0A0A0A]"
            >
              CONTACT ME
            </button>
            <a href="https://linkedin.com/in/abioladblogger">
              <img src={linkedin} alt="linkedin icon" />
            </a>
            <a href="https://github.com/Bigbilly-github">
              <img src={github} alt="github icon" />
            </a>
          </div>
        </motion.div>
        <motion.div className="relative hidden xl:block"
           initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}>
          <img src={image} alt="image of yusuf abiola" />
          <img
            src={image2}
            alt=""
            className="absolute top-0 rounded-[15px] w-[600px]  h-[750px]"
          />
        </motion.div>
      </section>
    </>
  );
}

export default Hero;
