import {IoMdMail} from "react-icons/io";
import {AiOutlineCloudDownload} from "react-icons/ai";
import {BsFacebook, BsTelegram, BsTiktok} from "react-icons/bs";
const AboutMe = () => {
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
        <div className="pt-28 px-5 mb-5 ">
            <p className="text-blue-500 font-bold font-koh  mb-6 md:text-2xl lg:text-3xl">Hello Welcome !</p>
            <div className="lg:pl-40 ">
            
                <h3 className=" font-bold font-koh text-3xl md:text-4xl">I'm MengLim Chea</h3>
                <h3 className=" font-bold text-3xl font-koh pb-4">Web Developer</h3>
                <div className="flex md:gap-20 font-koh">
                    <button className=" flex items-center gap-1  font-Ubuntu text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br
                        focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 
                        shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        <IoMdMail size={20}/>  <a href="https://t.me/MenglimChea" target="_blank" rel="noreferrer"> Hire Me </a>
                    </button>
                    <button className="flex items-center gap-1 font-Ubuntu text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 
                        focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 
                        shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> 
                        <AiOutlineCloudDownload size={20}/>  <p onClick={onButtonClick}>Download CV</p> 
                    </button>
                </div>
                <p className="  pr-2 pt-4 border-r-blue-200 mb-5">I'm learning Computer Science at Royal University of Phnom Penh. 
                    I always spend much time with videos tutorial and practice by myself. In my free time, I enjoy listening to musics and 
                    playing sports to make my feeling fresh. 
                </p>
                <h1 className="mt-3  underline text-xl font-koh mb-5"> Why I study Computer Science ? </h1>
                <p className="">The most important aspect of computer science is problem solving, an essential skill
                    for life. Students study the design, development and analysis of software and
                    hardware used to solve problems in a variety of business, scientific and social
                    contexts.
                </p>
                <div className="mx-auto w-[300px] mt-6 md:w-[400px] lg:ml-20  ">
                    <a href="https://www.w3schools.com/" target="_blank" rel="noreferrer">
                        <img className="object-cover" src={require("../../img/cs1.jpg")} alt="Computer Science"></img>
                    </a>
                </div>
               <div className="mt-5 mb-5  font-bold  items-center gap-2 border-[2px] border-blue-400 inline-block px-3 py-2 rounded-xl hover:bg-blue-400 ease-in-out duration-500 ">
                    
                    <a href="https://t.me/MenglimChea" target="_blank" rel="noreferrer" > <BsTelegram size={20} className="float-left mr-2 mt-[2px]  "/> <span className="text-gray-500">Let's Talk</span> </a>
               </div>
                <div className="flex ">
                    <p className=" mt-3 text-red-500"> Follow me: </p>
                    <div className="flex  gap-5 items-center mt-2"> 
                        <a href="https://www.facebook.com/menglim.dnp" target="_blank" rel="noreferrer" className=" ml-6 cursor-pointer"><BsFacebook size={25}/></a>
                        <a href="https://www.tiktok.com/@limzzzzzzzzzzz" target="_blank" rel="noreferrer" > <BsTiktok size={25}/> </a>
                    </div>
                </div>
           </div>
        </div>
        
    )
}

export default AboutMe;