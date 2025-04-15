import React, { useState } from 'react';
import netflix from '../assets/images/netflix.jpg'
import spotify from '../assets/images/spotify.webp'
import adminPanel from '../assets/images/adminPanel.jpg'

const projects = [
  {
    index: 1,
    name: "Netflix Website Clone",
    image: netflix, // You can replace this with your actual image URL
    url: "file:///C:/Users/Developer%20RjSami/Downloads/Netflix-Clone-main/Netflix-Clone-main/index.html" // Add the URL for the project
  },
  {
    index: 2,
    name: "Spotify Website Clone",
    image: spotify, // Replace with your image URL
    url: "https://www.spotify.com" // Add the URL for the project
  },
  {
    index: 3,
    name: "Admin Panel Website Clone",
    image: adminPanel, // Replace with your image URL
    url: "https://www.google.com" // Add the URL for the project
  },
];

   

const Products = () => {

  const [showIframe, setShowIframe] = useState(false);
  const [iframeUrl, setIframeUrl] = useState("");

  // Function to toggle iframe visibility and set the correct URL
  const handleIframeToggle = (url) => {
    setIframeUrl(url);
    setShowIframe(true);
  };

  return (
    <div id='products' className='w-full bg-[#0d0d2b] py-8 px-4'>
  {/* Section Title */}
  <div className='w-full bg-[#3b82f6] text-center text-white py-2 border-b-2 mb-6'>
    <span className='text-[24px] md:text-[30px] font-serif'>All Projects</span>
  </div>

  {/* Projects Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
    {projects.map((project, index) => (
      <div key={index} className='bg-black rounded-xl w-full max-w-[370px] overflow-hidden shadow-lg'>
        <div className='w-full h-40 overflow-hidden'>
          <img src={project.image} className='w-full h-full object-cover' alt={project.name} />
        </div>
        <div className='text-white text-center py-2'>
          <span className='font-semibold'>{project.name}</span>
        </div>
        <div className='text-center pb-4'>
          <button className='bg-blue-500 px-4 py-2 rounded-full text-white font-bold hover:bg-blue-600 transition'
         >
            <a href={project.index.url} target='_blank'>Demo</a>
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* Conditionally render the iframe when a project is clicked */}
  {showIframe && (
        <div style={{ marginTop: '20px', width: '100%', height: '500px', border: '1px solid #ccc' }}>
          <iframe
            src={iframeUrl}
            width="100%"
            height="100%"
            title="Project Iframe"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      )}
</div>

  )
}

export default Products