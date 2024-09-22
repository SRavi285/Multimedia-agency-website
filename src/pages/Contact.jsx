import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demonstration purposes, we're not actually sending data anywhere.
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  return (
    <section className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-between mb-12">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg mb-4">
            We would love to hear from you! Whether you have a question, feedback, or want to work with us, feel free to reach out.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2 text-[#77a50c]" />
              <span>+1 234 567 890</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-[#77a50c]" />
              <span>info@multimediaagency.com</span>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-[#77a50c]" />
              <span>1234 Agency Lane, New York, NY 10001</span>
            </li>
          </ul>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl text-[#4267B2] hover:text-[#77a50c]" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl text-[#1DA1F2] hover:text-[#77a50c]" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl text-[#C13584] hover:text-[#77a50c]" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl text-[#0077B5] hover:text-[#77a50c]" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 bg-[#f7f7f7] p-6 rounded-lg shadow-lg">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#77a50c]"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-semibold mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#77a50c]"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-semibold mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#77a50c]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#77a50c] text-white py-3 rounded-lg font-semibold hover:bg-[#5e840b] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
              <p className="text-lg">
                Your message has been sent. We will get back to you as soon as possible.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
