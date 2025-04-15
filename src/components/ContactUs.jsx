import React, { useRef } from 'react';

const ContactUs = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:zindabadp034@gmail.com?subject=${formRef.current.subject.value}&body=${formRef.current.message.value}`;
  };

  return (
    <section id="contactus" className="min-h-[70vh] text-white rounded-xl mt-10 scroll-mt-24">
        <div className='w-full h-11 text-center bg-[#3b82f6] font-serif mb-14 border-b-2'>
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-10">
        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full border border-gray-300 p-3 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </form>

        {/* Contact Options */}
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">Email Us</h4>
            <p className="text-white">zindabadp034@gmail.com</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">WhatsApp</h4>
            <a
              href="https://wa.me/923029785913" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
