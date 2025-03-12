

function Header (){
    return(
        <>
        <header className="flex justify-between items-center fixed right-0 bg-[#0A0A0A] left-0 top-0 z-20 h-[96px] pl-[60px]">
            <h1 className="font-bebas  w-[146px] h-[48px] font-normal text-[32px] leading-[150%] -tracking-[1%]  text-[#C7C7C7]">YUSUF ABIOLA</h1>
            <nav className="w-[207px] h-[24px] flex gap-[32px]">
                <a href="" className="w-[45px] h-[24px]  font-inter font-medium text-[18px] leading-[150%] -tracking-[3%] text-[#C7C7C7]">About</a>
                <a href=""  className="w-[45px] h-[24px]  font-inter font-medium text-[18px] leading-[150%] -tracking-[3%] text-[#C7C7C7]" >Contact</a>
               
            </nav>
        </header>
        </>
    )
}

export default Header