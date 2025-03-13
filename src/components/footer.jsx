


function Footer (){


    const scrollToTop = () => {
        window.scrollTo({
          top: 0, 
          behavior: "smooth",
        });
      };
    return(
        <>
            <footer className="w-full flex h-[60px] gap-[12px] items-center justify-center">
                         <h1 className="font-manrope  text-[20px ]  font-medium text-[#C7C7C7] ">
                             <span className='text-[16px] font-medium'>&copy; {new Date().getFullYear()}</span> Yusuf Abiola
                        </h1>
                            <a  onClick={scrollToTop}  className="font-manrope  text-[20px ] underline cursor-pointer font-medium text-slate-400 ">Back to Top</a>
            </footer>
        </>
    )
}
export default Footer