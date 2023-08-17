const Skill = () => {
    return (
        <div className="mt-24 px-3  ">
            <h1 className="mb-5 font-Preahvihear text-green-500 text-[40px]">Skills</h1>
            <h1 className="font-Ubuntu"> There are several techologies which I have worked with ! </h1>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-6 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={require('../../img/C.png')} alt="C icon" />
                    <p className='my-4'>C</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={require('../../img/C++.png')} alt="C++ icon" />
                    <p className='my-4'>C++</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={require('../../img/Python.png')} alt="Python icon" />
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={require('../../img/SQL.png')} alt="SQL icon" />
                    <p className='my-4 pt-[13px] '>SQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={require('../../img/html.png')} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={require('../../img/css.png')} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={require('../../img/javascript.png')} alt="JavaScript icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={require('../../img/jQuery.png')} alt="jQuery icon" />
                    <p className='my-4'>jQuery</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={require('../../img/react.png')} alt="ReactJs icon" />
                    <p className='my-4'>ReactJs</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={require('../../img/tailwind.png')} alt="Tailwind icon" />
                    <p className='my-4'>Tailwind</p>
                </div>
            </div>
        </div>
    )
}

export default Skill;