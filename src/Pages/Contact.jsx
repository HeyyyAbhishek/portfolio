import { motion } from "framer-motion";
import { useState } from "react";
import Hover from "../Components/Hover";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setFormStatus('success');
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Clear success message after 3 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 3000);
  };

  const contacts = [
    {
      title: "Email",
      value: "hello@hek.dev",
      link: "mailto:hello@hek.dev"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/hek",
      link: "https://linkedin.com/in/"
    },
    {
      title: "GitHub",
      value: "github.com/hek",
      link: "https://github.com/"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-[92%] sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto"
    >
      <div className="mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-5">
          <span className="text-accent">#</span>contact
        </h1>
        <p className="text-text-secondary text-sm sm:text-lg max-w-2xl">
          Have a question or want to work together? I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-primary-light p-5 sm:p-8 rounded-lg shadow-card border border-border"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 relative inline-block">
            <span className="text-accent">#</span>contact-details
            <div className="absolute top-1/2 h-[2px] bg-accent hidden sm:block w-[100px] ml-[150px] sm:ml-[180px]"></div>
          </h2>

          <div className="space-y-6 sm:space-y-8">
            {contacts.map((contact, index) => (
              <motion.div 
                key={index}
                whileHover={{ x: 5 }}
                className="flex flex-col"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{contact.title}</h3>
                <a 
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary text-sm sm:text-base hover:text-accent transition-colors break-words"
                >
                  {contact.value}
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12">
            <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5">
              <span className="text-accent">#</span>social-media
            </h2>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="border-2 border-border rounded-md p-2 sm:p-3 text-sm sm:text-base hover:border-accent transition-colors"
              >
                Twitter
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="border-2 border-border rounded-md p-2 sm:p-3 text-sm sm:text-base hover:border-accent transition-colors"
              >
                Instagram
              </motion.a>
              <motion.a 
                href="https://dev.to" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="border-2 border-border rounded-md p-2 sm:p-3 text-sm sm:text-base hover:border-accent transition-colors"
              >
                Dev.to
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-primary-light p-5 sm:p-8 rounded-lg shadow-card border border-border"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 relative inline-block">
            <span className="text-accent">#</span>message-me
            <div className="absolute top-1/2 h-[2px] bg-accent hidden sm:block w-[100px] ml-[110px] sm:ml-[140px]"></div>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 sm:mb-2 text-text text-sm sm:text-base font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-secondary border border-border rounded-md p-2 sm:p-3 focus:border-accent focus:outline-none transition-colors text-text text-sm sm:text-base"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 sm:mb-2 text-text text-sm sm:text-base font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-secondary border border-border rounded-md p-2 sm:p-3 focus:border-accent focus:outline-none transition-colors text-text text-sm sm:text-base"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 sm:mb-2 text-text text-sm sm:text-base font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-secondary border border-border rounded-md p-2 sm:p-3 focus:border-accent focus:outline-none transition-colors resize-none text-text text-sm sm:text-base"
              ></textarea>
            </div>
            <Hover>
              <button
                type="submit"
                className="border-2 border-accent px-5 sm:px-6 py-2 sm:py-3 hover:bg-accent/20 transition-colors rounded-md font-medium text-sm sm:text-base"
              >
                Send Message
              </button>
            </Hover>
            
            {formStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-success mt-3 sm:mt-4 p-2 sm:p-3 bg-success/10 border border-success/30 rounded-md text-sm sm:text-base"
              >
                Message sent successfully!
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;
