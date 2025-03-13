

function Header (){


    const scrollToPositionAbout = () => {
        window.scrollTo({
          top: 4050, // Adjust this value to scroll to your desired height
          behavior: "smooth",
        });
      };

   


      const scrollToPositionContact = () => {
        window.scrollTo({
          top: 5050, // Adjust this value to scroll to your desired height
          behavior: "smooth",
        });
      };
      const scrollToPositionProjects = () => {
        window.scrollTo({
          top: 850, // Adjust this value to scroll to your desired height
          behavior: "smooth",
        });
      };
    return(
        <>
        <header className=" sm:bg-[green] md:bg-[blue] lg:bg-[yellow] xl:bg-[orange] flex justify-between items-center fixed right-0 bg-[#0A0A0A] left-0 top-0 z-20 h-[96px] xl:pr-[120px] sm:pl-[60px] pl-[20px]">
            <h1 className="font-bebas  w-[146px] h-[48px] font-normal text-[32px] leading-[150%] -tracking-[1%]  text-[#C7C7C7]">YUSUF ABIOLA</h1>
            <nav className="w-[250px]  h-[24px]  gap-[32px] flex items-center ">
                <a onClick={scrollToPositionAbout}   className="w-[45px] h-[24px]  hover:opacity-65 cursor-pointer font-inter font-medium text-[18px] leading-[150%] -tracking-[3%] text-[#C7C7C7]">About</a>
                <a onClick={scrollToPositionContact} className="w-[45px] h-[24px] hover:opacity-65 cursor-pointer font-inter font-medium text-[18px] mr-[20px] leading-[150%] -tracking-[3%] text-[#C7C7C7]" >Contact</a>
                <a onClick={scrollToPositionProjects}  className="w-[45px] h-[24px] hover:opacity-65 cursor-pointer font-inter font-medium text-[18px] leading-[150%] -tracking-[3%] text-[#C7C7C7]" >Projects</a>
               
            </nav>
        </header>
        </>
    )
}

export default Header