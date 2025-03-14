
import jobtracker from "../img/projects/jobtracker.png"
import todolist from "../img/projects/todolist.png"
import travelagency from "../img/projects/travelagency.png"
import youtube from "../img/projects/youtube.png"


function Projects (){


    const Projects =[ {
        name: " A job Application Tracker ",
        description: "The Job Application Tracker is a web-based tool designed to help job seekers efficiently manage and organize their job applications. With an intuitive UI and dynamic features, users can track application statuses in one place.",
        year:"2025",
        image:jobtracker,
        link:"https://bigbilly-github.github.io/job-application-tracker/",
        githublink:"https://github.com/Bigbilly-github/job-application-tracker"
    },
    {
        name: "Landing page for a Travel Agency ",
        description: "The Travel Agency Landing Page is a visually appealing and user-friendly website designed to attract and engage travelers. It highlights destinations, packages, and services while providing a seamless browsing experience.",
        year:"2025",
        image: travelagency,
        link:"https://bigbilly-github.github.io/landingPage/",
        githublink:"https://github.com/Bigbilly-github/landingPage"
    },
    {
        name: "A todolist",
        description: "The To-Do List App is a simple yet powerful task management tool designed to help users stay organized and productive. With an intuitive interface and interactive features, users can efficiently manage their daily tasks.",
        year:"2025",
        image:todolist,
        link:"https://todolist-lemon-alpha.vercel.app/",
        githublink:"https://github.com/Bigbilly-github/todolist"
    },
    {
        name: "Youtube landing page (clone)",
        description: "The YouTube Landing Page Mockup is a visually accurate and responsive replica of YouTube’s homepage, designed to enhance my front-end development skills in UI replication and responsiveness.",
        year:"2025",
        image:youtube,
        link:"https://youtube-landing-page-tawny.vercel.app/",
        githublink:"https://github.com/Bigbilly-github/mastering-tailwind-CSS"
    }

]
    return(
        <>
        <section className="mt-[100px] xl:pt-[70px] xl:px-[100px] pt-[40px] md:pt-[80px] h-auto flex flex-col xl:items-start xl:gap-[20px] items-center xl:justify-center  border border-slate-800 border-x-0 w-full ">
            <div>
                <h1 className=" md:w-[464px] w-[329px] md:h-[60px] h-[43px] xl:h-[76px] font-bebas md:text-[76px] text-[43px]  mb-0 leading-[100%] text-[#FFFFFF] ">
               FEATURED PROJECTS
                </h1>
                <p className="font-manrope text-[18px] md:mt-[15px] mt-[12px] w-[343px] md:w-[500px] md:h-[50px] h-[48px] xl:w-[600px] xl:h-[54px] leading-[150%] text-[#C7C7C7] ">
                Here are some of the selected projects that showcase my passion for front-end development.
                </p>
            </div>
            <div className="xl:mt-[80px] mt-[120px] md:mt-[100px]">
                { Projects.map((project,index) => 
                <div key={index} className="xl:w-[1224px] xl:h-[600px] mb-[120px] flex  flex-col xl:flex-row gap-[48px]  items-center">
                    <div className="xl:w-[600px] xl:h-[600px] w-[384px] h-[343px] md:w-[500px] md:h-[400px] bg-[#1A1A1A]  flex justify-center items-center rounded-[15px]">
                        <img src={project.image} alt="" className="xl:w-[486px] xl:h-[347px]  w-[320px] h-[200px]  md:w-[400px]    rounded-[10px] "/>

                    </div>
                    <div>
                        <h2 className="xl:w-[576px] w-[343px] md:w-[500px] mb-0  font-manrope font-medium md:text-[28px] text-[24px] xl:text-[32px] leading-[140%]  text-[#FFFFFF] ">
                    {project.name}
                        </h2>
                        <p className="xl:w-[576px]  w-[343px] md:w-[500px] mt-[16px] mb-0 h-auto font-manrope text-[16px] xl:text-[18px] leading-[150%]  text-[#C7C7C7]">
                        {project.description}
                        </p>

                        <div className="mt-[32px]">
                            <h1 className="border-b border-b-slate-800 text-[#C7C7C7] pb-[20px]">
                                PROJECT INFO
                            </h1>
                            <div className="border-b border-b-slate-800 h-[50px] text-[#C7C7C7]  flex justify-between items-center">
                               <p className="text-[16px] font-manrope w-[33px] h-[26px] ">
                                  Year
                               </p>
                               <p>
                              {project.year}
                               </p>
                            </div>
                            <div className="border-b border-b-slate-800 h-[50px] text-[#C7C7C7]  flex justify-between items-center">
                               <p className="text-[16px] font-manrope w-[33px] ">
                                  Role
                               </p>
                               <p>
                                    Front-end developer
                               </p>

                            </div>
                            <div className="border-b border-b-slate-800 h-[50px] text-[#C7C7C7]  flex justify-between items-center">
                               <p className="text-[16px] font-manrope w-[33px] ">
                                  Stack
                               </p>
                               <p>
                                    React, Javascript, Tailwind CSS
                               </p>
                               
                            </div>

                            <div className="mt-[48px] ">
                                <a href={project.link} className="underline text-[#D3E97A] mr-[52px]  hover:opacity-70 font-manrope text-[16px] leading-[150%] w-[83px] h-[24px]"> VIEW PROJECT</a>
                                <a href={project.githublink}  className="underline text-[#D3E97A]  hover:opacity-70 font-manrope text-[16px] leading-[150%] w-[83px] h-[24px]">SEE ON GITHUB</a>
                            </div>
                        </div>
                    </div>


                </div>
                )}



                

            </div>

          

        </section>
        </>
    )
}
export default Projects