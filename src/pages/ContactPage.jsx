import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/core/AnimatedPage';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { RiSendPlaneFill } from 'react-icons/ri';

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formState, setFormState] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show submitting state
    setFormState({ submitting: true, submitted: false, error: null });
    
    // Simulate form submission (replace with actual implementation)
    setTimeout(() => {
      // Success case
      setFormState({ submitting: false, submitted: true, error: null });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  // Contact information
  const contactInfo = [
    {
      icon: <FaEnvelope className="h-5 w-5" />,
      label: 'Email',
      value: '3marshehata@gmail.com',
      link: 'mailto:3marshehata@gmail.com',
    },
    {
      icon: <FaPhoneAlt className="h-5 w-5" />,
      label: 'Phone',
      value: '+20 1011789341',
      link: 'tel:+201011789341',
    },
    {
      icon: <FaGithub className="h-5 w-5" />,
      label: 'GitHub',
      value: 'OmarShehata1',
      link: 'https://github.com/OmarShehata1/',
    },
    {
      icon: <FaLinkedinIn className="h-5 w-5" />,
      label: 'LinkedIn',
      value: 'omar-she7ata',
      link: 'https://www.linkedin.com/in/omar-she7ata/',
    },
  ];

  return (
    <AnimatedPage>
      <section className="page-section pt-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <span className="text-[rgb(var(--accent))] font-medium">Contact</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">Get In Touch</h1>
            <p className="text-[rgb(var(--text-alt))] mt-4 max-w-2xl">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="bg-[rgb(var(--background-alt))] p-6 md:p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                
                {/* Success message */}
                {formState.submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-lg bg-green-100 text-green-800"
                  >
                    Thank you for your message! I'll get back to you soon.
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[rgb(var(--text-alt))] mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[rgba(var(--text),0.1)] bg-[rgb(var(--background))] text-[rgb(var(--text))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[rgb(var(--text-alt))] mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[rgba(var(--text),0.1)] bg-[rgb(var(--background))] text-[rgb(var(--text))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] transition-colors"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-[rgb(var(--text-alt))] mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[rgba(var(--text),0.1)] bg-[rgb(var(--background))] text-[rgb(var(--text))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] transition-colors"
                      placeholder="Subject of your message"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-[rgb(var(--text-alt))] mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-[rgba(var(--text),0.1)] bg-[rgb(var(--background))] text-[rgb(var(--text))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] transition-colors"
                      placeholder="Your message"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={formState.submitting}
                    className="w-full btn btn-primary flex items-center justify-center group"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {formState.submitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <motion.span
                          className="ml-2"
                          initial={{ x: 0 }}
                          animate={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <RiSendPlaneFill />
                        </motion.span>
                      </span>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-[rgb(var(--background-alt))] p-6 md:p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-[rgb(var(--background))] hover:bg-[rgba(var(--accent),0.1)] transition-colors"
                      whileHover={{ scale: 1.01, x: 5 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="p-3 rounded-full bg-[rgba(var(--accent),0.1)] text-[rgb(var(--accent))]">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        <p className="text-[rgb(var(--text-alt))]">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
              
              <div className="bg-[rgb(var(--background-alt))] p-6 md:p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
                <p className="text-[rgb(var(--text-alt))] mb-4">
                  I'm currently looking for new opportunities. If you have a project that needs a dedicated web developer, I'm just a message away!
                </p>
                <p className="text-[rgb(var(--text-alt))]">
                  Whether you have a question or just want to say hi, I'll get back to you as soon as possible.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
} 