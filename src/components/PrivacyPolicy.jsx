
import React from "react";

function PrivacyPolicy({ show, onClose }) {
  return (
    <div className={`privacy-policy ${show ? "show" : "hide"}`}>
    <div className="privacy-policy absolute bg-black" >
      <div className="w-7 h-7 cursor-pointer bg-red-500 text-center rounded-full mb-6 text-white mt-2 ml-2" 
      onClick={onClose}>X</div>
     <div className="w-[100%] h-[500px] bg-slate-900  rounded-md text-white">
     <h1>Privacy Policy</h1>
     <p>Here are the details of the privacy policy...</p>
     </div>
      
    </div>
    </div>
  );
}

export default PrivacyPolicy;
