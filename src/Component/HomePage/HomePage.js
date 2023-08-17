
import AboutMe from "../AboutMe/AboutMe";
import Skill from "../Skill/Skil";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
const HomePage = () => {    
    return (
        <div>
            <div className="sm:pl-20 md:pl-28 md:pr-32 lg:pr-40 ">
                <AboutMe />
                <Skill />
                <Portfolio/>
                <Contact/>
            </div>
            <Footer/>
        </div>
        
    )
}
export default HomePage;