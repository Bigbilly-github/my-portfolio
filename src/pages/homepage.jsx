import Aboutme from "../components/aboutme"
import Connect from "../components/connect"
import Header from "../components/header"
import Hero from "../components/hero"
import Projects from "../components/projects"


function Homepage (){
    return(
        <>
        <Header/>
        <Hero/>
        <Projects/>
        <Aboutme/>
        <Connect/>
        </>
    )
}
export default Homepage