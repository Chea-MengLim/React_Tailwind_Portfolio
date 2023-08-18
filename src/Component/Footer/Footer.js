import {Link} from "react-router-dom";
import {IoMdMail} from "react-icons/io";
import {AiOutlineCloudDownload} from "react-icons/ai";
import {BsTelegram, BsFacebook, BsGithub, BsMessenger, BsLinkedin, BsTiktok} from "react-icons/bs";
const Footer = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('CV.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'MengLimCV.pdf';
            alink.click();
            window.open("CV.pdf")
        })
    })
} 
  return (
    <div className="bg-sky-200  pt-3  h-[30vh] ">
      <div className="mx-auto  flex justify-center gap-3 sm:gap-6 md:gap-10 lg:gap-16">
        <Link to="https://t.me/MenglimChea" target="_blank"> <BsTelegram size={28}/> </Link>
        <Link to="https://www.facebook.com/menglim.dnp" target="_blank"> <BsFacebook size={28} /> </Link>
        <Link to="https://m.me/menglimchea.dnp" target="_blank"> <BsMessenger size={28} /> </Link>
        <Link to="https://github.com/Chea-MengLim/React_Tailwind_Portfolio.git" target="_blank"> <BsGithub size={28}/> </Link>         
        <Link to="https://www.linkedin.com/in/chea-menglim-65a389273/" target="_blank"> <BsLinkedin size={28} />    </Link>  
        <Link to="https://www.tiktok.com/@limzzzzzzzzzzz" target="_blank"> <BsTiktok size={28}/> </Link>
      </div>
      <div className=" md:gap-20 mt-8 flex justify-center font-koh">
        <button className=" flex items-center gap-1   text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br
                        focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 
                        shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        <IoMdMail size={20}/>  <a href="https://t.me/MenglimChea" target="_blank" rel="noreferrer"> Hire Me </a>
        </button>
        <button className="flex items-center gap-1  text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 
                        focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 
                        shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> 
                        <AiOutlineCloudDownload size={20}/>  <p onClick={onButtonClick}>Download CV</p> 
        </button>           
      </div>
      <div className="pt-5">
        <p className="text-center text-black">Copyright ©2023 Chea MengLim.</p>
      </div>
    </div>
  );
};

export default Footer;