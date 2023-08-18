const Portfolio = () => {
    return (
        <div className="mt-28 px-5 mb-10">
            <h1 className=" text-green-500 text-4xl  pb-4">Portfolio</h1>
            <h1 className=" md:text-2xl lg:text-3xl  ">
                Design Entity Relationship Diagram for POS system with team assignment  
            </h1>
            <div className="mt-10 mx-auto border-[2px] border-yellow-300 rounded-xl max-w-[600px] ">             
                <a href="https://www.guru99.com/er-diagram-tutorial-dbms.html" target="_blank" rel="noreferrer">
                    <img src={require("../../img/database.png")} alt="database design"></img>
                </a>
                    
               
            </div>
            
        </div>
    )
}

export default Portfolio;