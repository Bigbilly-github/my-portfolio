
import { motion } from "framer-motion"

function Aboutme (){
    return(
        <>
            <section className="w-full  xl:h-[800px] h-[700px]  md:h-[550px] flex items-center xl:items-start flex-col xl:flex-row xl:justify-center border-b border-slate-800  xl:pt-[122px] pt-[90px]">
                <motion.div className="flex xl:gap-[223px] flex-col xl:flex-row"
                   initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}>
                    <div className="xl:w-[307px]   md:w-[500px]  w-[307px] text-center xl:text-left  h-[50px] xl:h-[91px] font-bebas font-normal md:text-[50px] text-[30px] xl:text-[101px] leading-[90%] text-[#FFFFFF]">
                        <h1>
                            ABOUT ME
                        </h1>

                    </div>
                    <div className="xl:w-[702px] xl:h-[241px] w-[343px] md:w-[600px] h-[184px]  justify-center">
                        <h2 className="xl:w-[702px] w-[343px]  xl:h-[90px] hidden xl:block font-manrope  text-[20px] xl:text-[32px] leading-[140%] mb-0 text-[#FFFFFF]">
                        I am a front-end developer with a background in Computer Science. 
                        </h2>
                        <p className="font-manrope  text-[16px] md:text-[18px] leading-[150%] xl:w-[702px] md:w-[600px] w-[343px] mt-[16px]  text-[#C7C7C7]">
                         I specialize in building responsive, user-friendly web applications using HTML, CSS, JavaScript, React, Next.js,  Github/Git and Tailwind CSS.


                        </p>
                        <p className="font-manrope   text-[16px] md:text-[18px] leading-[150%] xl:w-[702px] md:w-[600px] w-[343px] mt-[16px]  text-[#C7C7C7]">
                        With a keen eye for detail and a love for clean, functional design, I enjoy transforming ideas into interactive and visually appealing websites. I’ve worked on projects ranging from landing pages to job application trackers, constantly improving my skills in UI/UX implementation.


                        </p>
                        <p className="font-manrope  text-[16px] md:text-[18px] leading-[150%] xl:w-[702px]  md:w-[600px] w-[343px] mt-[16px]  text-[#C7C7C7]">
                                Beyond coding, I have experience in Teaching, where I’ve honed my organizational and problem-solving skills. I’m always eager to learn, collaborate, and take on exciting challenges in web development.

                              
                        </p>
                        <p className="font-manrope mb-[81px]  text-[16px] md:text-[18px] leading-[150%] xl:w-[702px]  md:w-[600px] w-[343px] mt-[16px]  text-[#C7C7C7]">
                         Let’s build something amazing together!
                        </p>
                        

                       

                    </div>
                </motion.div>

            </section>
        </>
    )
}
export default Aboutme