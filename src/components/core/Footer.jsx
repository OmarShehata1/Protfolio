import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Social links with icons
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/OmarShehata1/',
      icon: <FaGithub className="h-5 w-5" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/omar-she7ata/',
      icon: <FaLinkedinIn className="h-5 w-5" />,
    },
  ];

  // Footer links
  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-[rgb(var(--background-alt))] py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="text-xl md:text-2xl font-bold inline-flex">
              <span className="text-[rgb(var(--accent))]">Omar</span>
              <span className="text-[rgb(var(--text))]">Shehata</span>
            </Link>
            <p className="text-[rgb(var(--text-alt))] text-sm md:max-w-xs">
              Computer & Control Systems Engineering Student | Web Developer
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[rgb(var(--background))] text-[rgb(var(--text))] hover:text-[rgb(var(--accent))] transition-colors duration-300 custom-cursor"
                  aria-label={link.name}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[rgb(var(--text-alt))] hover:text-[rgb(var(--accent))] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-[rgb(var(--text-alt))]">
                <span className="block">Email:</span>
                <a
                  href="mailto:3marshehata@gmail.com"
                  className="text-[rgb(var(--accent))] hover:underline"
                >
                  3marshehata@gmail.com
                </a>
              </li>
              <li className="text-[rgb(var(--text-alt))]">
                <span className="block">Phone:</span>
                <a
                  href="tel:+201011789341"
                  className="text-[rgb(var(--accent))] hover:underline"
                >
                  +20 1011789341
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[rgba(var(--text),0.1)] text-center">
          <p className="text-sm text-[rgb(var(--text-alt))]">
            &copy; {currentYear} Omar Shehata. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 