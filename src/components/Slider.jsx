import React from 'react'
import logo from '../assets/images/rjsami.jpg'
function Slider() {
  return (
    <section className='slider w-full bg-slate-600 flex flex-col md:flex-row items-center justify-center py-6'>
    {/* Left Side */}
    <div className='slider-left-side w-full md:w-1/2 flex flex-col items-center'>
      <div className='profile bg-slate-800 h-72 w-72 md:h-96 md:w-96 rounded-full mt-4 border-solid'>
        <img className='w-full h-full object-cover rounded-full border-solid' src={logo} alt="profile" />
      </div>
      <div className='profile-name text-center mt-4'>
        <h2 className='text-[24px] md:text-[30px] font-medium font-serif text-white'>Developer RJ Sami</h2>
      </div>
    </div>
  
    {/* Right Side */}
    <div className='slider-right-side w-full md:w-1/2 flex justify-center px-4 mt-6 md:mt-0'>
      <div className='max-w-[90%] md:max-w-[800px] bg-[#0f6ab0] text-white p-6 md:p-8 text-[16px] md:text-[20px] text-left rounded-xl border-l-4'>
        <p>
          Hello! I'm RJ Sami, a passionate web developer 
          with 8 years of experience in building visually stunning and user-friendly websites.
          I specialize in HTML, CSS, JavaScript, React, WordPress, etc. 
          My goal is to create websites that not only look great but also provide an exceptional user experience.
          I work with clients to bring their ideas to life, focusing on performance, security, and scalability.
        </p>
      </div>
    </div>
  </section>
  
  )
}

export default Slider