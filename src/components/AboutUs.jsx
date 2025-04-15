import React from 'react'

function AboutUs() {
  return (
     <section id="aboutus" className="min-h-[60vh] bg-[#0d0d2b]  scroll-mt-24">
        <div className='w-full h-11 bg-[#3b82f6] text-center font-serif border-b-2'>
        <h2 className="text-3xl font-bold mb-4 text-white ">About Us</h2>
        </div>
     
     <p className="text-gray-700 leading-relaxed text-lg p-6 text-white ">
       We are a team of creative and passionate developers focused on crafting high-quality web solutions. With expertise in modern technologies like <strong>React.js, Laravel, Tailwind CSS, and Node.js</strong>, we build fast, scalable, and user-friendly applications that drive results.
     </p>
     <p className="text-gray-700 leading-relaxed text-lg mt-4 p-6 text-white ">
       From dynamic front-end interfaces to powerful back-end systems, we deliver full-stack solutions tailored to our clients’ needs. We prioritize clean code, responsive design, and seamless user experience in every project we build.
     </p>
   </section>
  )
}

export default AboutUs