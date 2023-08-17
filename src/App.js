import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Component/HomePage/HomePage";
import AboutMe from "./Component/AboutMe/AboutMe";
import SignIn from "./Component/SignIn/SignIn";
import Contact from "./Component/Contact/Contact";
import Skill from "./Component/Skill/Skil";
import Portfolio from "./Component/Portfolio/Portfolio";


const App = () =>{
  return (
    <div>
     
      <BrowserRouter>
        <Navbar />
        <Routes>      
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
        
      </BrowserRouter>

     
    </div>
  )
}
export default App;