import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className=' h-screen  flex justify-center items-center px-5 mt-20'>
        <form method='POST' action="https://getform.io/f/be9e5d1b-0374-4d9d-a1f3-d2c47fe6f2b4" className='flex flex-col  w-full max-w[600px] '>
            <div className='pb-8'>
                <p className='text-4xl  inline font-bold  text-green-500'>Contact</p>
                <p className='font-Exo font-bold py-4'>
                    You can contact me by sending a message.
                </p>
            </div>
            <input className='border-2 border-gray-500 rounded-xl p-2  ' type="text" placeholder='Your Name' name='name' />
            <input className='my-4 p-2 border-2 border-gray-500 rounded-xl ' type="email" placeholder='Your Email' name='email' />
            <textarea className='border-2 border-gray-500 rounded-xl p-2 ' name="message" rows="10" placeholder='Message'></textarea>
            <button className=' border-2 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-blue-100 text-gray-500 rounded-lg px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
        </form>
    </div>
  )
}

export default Contact