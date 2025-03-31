import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-b from-gray-900 to-black py-20 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto px-6">
        <h2 className="text-5xl font-bold text-white text-center mb-16">Let's Connect</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Info Section */}
          <div className="text-white space-y-8">
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Address</h3>
              <p className="text-gray-400">Surat, Gujarat, India</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">(+91) 8009988130</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400">praveshprajapati708154@gmail.com</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-xl">
            <h3 className="text-3xl font-semibold text-white mb-8">Send Me a Message</h3>
            <form action="mailto:ashokaakshee@gmail.com?subject=Contact Form Submission" method="post" enctype="text/plain">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Name</label>
                  <input type="text" name="name" placeholder="Your Name" className="w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Email</label>
                  <input type="email" name="email" placeholder="Your Email" className="w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500" required />
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-gray-300 font-medium mb-2">Message</label>
                <textarea name="message" placeholder="Write your message..." rows="5" className="w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500" required></textarea>
              </div>
              <button type="submit" className="mt-6 w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-all">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;