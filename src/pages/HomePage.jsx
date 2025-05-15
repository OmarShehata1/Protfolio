import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/core/AnimatedPage';
import { HiArrowRight, HiDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function HomePage() {
  // Custom animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <AnimatedPage>
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16">
        {/* Background particles/decoration */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[rgb(var(--accent))] opacity-5 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[rgb(var(--highlight))] opacity-5 rounded-full blur-[100px]" />
        </div>

        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6"
            >
              {/* Greeting */}
              <motion.div variants={itemVariants} className="inline-block">
                <span className="px-4 py-2 rounded-full bg-[rgb(var(--background-alt))] text-[rgb(var(--accent))] text-sm font-medium">
                  Hi there, I'm Omar 👋
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Computer & Control Systems{' '}
                <span className="text-[rgb(var(--accent))]">Engineering Student</span>
              </motion.h1>

              {/* Description */}
              <motion.p variants={itemVariants} className="text-lg text-[rgb(var(--text-alt))] max-w-2xl">
                Passionate about web development and creating beautiful, functional interfaces that deliver exceptional user experiences.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-4">
                <Link to="/projects" className="btn btn-primary">
                  View Projects <HiArrowRight className="ml-2" />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Me
                </Link>
                {/* <a
                  href="/resume.pdf"
                  className="btn bg-transparent border border-[rgb(var(--text-alt))] text-[rgb(var(--text))] hover:bg-[rgb(var(--text-alt))] hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume <HiDownload className="ml-2" />
                </a> */}
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="flex gap-4 mt-4">
                <motion.a
                  href="https://github.com/OmarShehata1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-[rgba(var(--text),0.1)] text-[rgb(var(--text))] hover:text-[rgb(var(--accent))] transition-colors duration-300"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/omar-she7ata/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-[rgba(var(--text),0.1)] text-[rgb(var(--text))] hover:text-[rgb(var(--accent))] transition-colors duration-300"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedinIn className="h-5 w-5" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Hero image/illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-first lg:order-last flex justify-center items-center"
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--highlight))] rounded-full opacity-30 blur-xl animate-pulse" />
                <div className="relative bg-[rgb(var(--background-alt))] rounded-full overflow-hidden w-72 h-72 md:w-96 md:h-96 p-2">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full rounded-full bg-[rgb(var(--background-alt))] border-2 border-[rgb(var(--background))] flex items-center justify-center text-6xl text-[rgb(var(--text-alt))]">
                    <img src="/images/protfolio.jpeg" alt="Profile" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
} 