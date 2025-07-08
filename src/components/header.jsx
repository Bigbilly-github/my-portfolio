

function Header (){




   


      function scrollToBottom() {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
          });
}


    return(
        <>
        <header className="  flex justify-between items-center fixed right-0 bg-[#0A0A0A] left-0 top-0 z-20 h-[96px] xl:pr-[120px] sm:pr-[20px] sm:pl-[60px] pl-[20px]">
            <h1 className="font-bebas w-[128px] h-[28px]  xl:w-[146px] xl:h-[48px] font-normal text-[28px] xl:text-[32px] leading-[150%] -tracking-[1%]  text-[#C7C7C7]">YUSUF ABIOLA</h1>
            <nav className="w-[130px]  h-[24px]  flex items-center justify-between ">

                <a onClick={scrollToBottom} className="w-[110px] active:bg-black active:text-black h-[24px] hover:opacity-65 cursor-pointer font-inter font-medium text-[18px] sm:text-[18px] mr-[20px] leading-[150%]  -tracking-[3%] text-[#C7C7C7]" >Contact Me</a>

               
            </nav>
        </header>
        </>
    )
}

export default Header