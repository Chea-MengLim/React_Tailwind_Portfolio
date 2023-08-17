const Portfolio = () => {
    return (
        <div className="mt-28 px-5 mb-10">
            <h1 className="font-Ubuntu text-green-500 text-4xl  pb-4">Portfolio</h1>
            <h1 className="font-Ubuntu text-blue-500 md:text-2xl lg:text-3xl pl-16 ">Database Design 
                <br/>
                Project Team
            </h1>
            <div className="mt-10 mx-auto border-[2px] border-yellow-300 rounded-xl max-w-[600px] ">             
                
                    <img src={require("../../img/database.png")} alt="database design" ></img>
               
            </div>
            
        </div>
    )
}

export default Portfolio;