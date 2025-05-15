import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/core/AnimatedPage';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectsPage() {
  // Filter categories
  const categories = ['All', 'Frontend', 'Fullstack', 'Backend'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'Storify',
      description: 'A story sharing platform where users can publish and read stories.',
      category: 'Fullstack',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      imageUrl: '/projects/storify.jpg',
      githubUrl: 'https://github.com/OmarShehata1/storify',
      // liveUrl: 'https://storify-demo.vercel.app',
      features: [
        'User authentication',
        'Story publishing and reading',
        'Comments and likes',
        'User profiles',
      ],
    },
    {
      id: 2,
      title: 'Strimo',
      description: 'Fullstack chat and video calling application with real-time communication.',
      category: 'Fullstack',
      technologies: ['React', 'Tailwind', 'NodeJS', 'Express', 'MongoDB', "Stream"],
      imageUrl: '/projects/strimo.jpg',
      githubUrl: 'https://github.com/OmarShehata1/strimo',
      liveUrl: 'https://strimo-demo.vercel.app',
      features: [
        'Real-time chat',
        'Video calling',
        'User presence indicators',
        'Message read receipts',
      ],
    },
    {
      id: 3,
      title: 'Course Management API',
      description: 'RESTful API for managing educational courses and student enrollments.',
      category: 'Backend',
      technologies: ['NodeJS', 'Express', 'MongoDB', 'JWT'],
      imageUrl: '/projects/course-api.jpg',
      githubUrl: 'https://github.com/OmarShehata1/API_Courses',
      liveUrl: null,
      features: [
        'CRUD operations for courses',
        'User authentication and authorization',
        'Student enrollment management',
        'Comprehensive API documentation',
      ],
    },
    {
      id: 4,
      title: 'Travel List App',
      description: 'A React application to help users organize travel packing lists.',
      category: 'Frontend',
      technologies: ['React', 'CSS', 'Local Storage'],
      imageUrl: '/projects/travel-list.jpg',
      githubUrl: 'https://github.com/OmarShehata1/travel-list',
      liveUrl: 'https://travel-list-demo.vercel.app',
      features: [
        'Add/remove items',
        'Mark items as packed',
        'Sort and filter items',
        'Persistent storage',
      ],
    },
    {
      id: 5,
      title: 'MediCare',
      description: 'Healthcare web application for appointment booking and patient management.',
      category: 'Frontend',
      technologies: ['React','Tailwind CSS'],
      imageUrl: '/projects/medicare.jpg',
      githubUrl: 'https://github.com/OmarShehata1/medicare',
      liveUrl: 'https://medcare3.netlify.app/',
      features: [
        'Doctor appointment booking',
        'User profiles',
        'Medical records management',
        'Appointment reminders',
      ],
    },
    {
      id: 6,
      title: 'Omnifood',
      description: 'Responsive landing page for a fictional food delivery service.',
      category: 'Frontend',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: '/projects/omnifood.jpg',
      githubUrl: 'https://github.com/OmarShehata1/omnifood',
      liveUrl: 'https://omnifood-shehata.netlify.app/',
      features: [
        'Responsive design',
        'Modern UI/UX',
        'Interactive elements',
        'Performance optimized',
      ],
    },
    {
      id: 7,
      title: 'Task Management App',
      description: 'A simple RESTful API for managing tasks✨.',
      category: 'Backend',
      technologies: ['NodeJS', 'Express', 'MongoDB'],
      imageUrl: '/projects/omnifood.jpg',
      githubUrl: 'https://github.com/OmarShehata1/Task-Manager',
      // liveUrl: '',
      features: [
        'Create, read, update, and delete tasks (CRUD',
        'RESTful API structure',
        'Input validation with Express',
      ],
    },
    {
      id: 8,
      title: 'NODE FARM',
      description: 'Simple Node.js API that reads data from a local JSON file and serves it through an HTTP server.',
      category: 'Backend',
      technologies: ['NodeJS', 'HTTP', 'File System'],
      imageUrl: '/projects/nodefarm.jpg',
      githubUrl: 'https://github.com/OmarShehata1/NODE-FARM', // Update if different
      liveUrl: '', // Leave blank or null if no live version
      features: [
        'Basic HTTP server with Node.js',
        'Read and parse local JSON data',
        'Serve dynamic content based on request URLs',
        'No external frameworks used',
      ],
    },
    {
      id: 9,
      title: 'Student Management System',
      description: 'A simple full-stack Student Management System built with React, Node.js, Express, and MongoDB. Users can add, view, update, and delete student data with a responsive UI.',
      category: 'Fullstack',
      technologies: ['React', 'Vite', 'Material UI', 'NodeJS', 'Express', 'MongoDB', 'Mongoose'],
      imageUrl: '/projects/student-management.jpg', // Replace with actual image path
      githubUrl: 'https://github.com/OmarShehata1/Student-Management', // Update if different
      liveUrl: '', // Add live demo URL if available
      features: [
        'Display student data in a styled table',
        'Add, edit, and delete students',
        'Hooks used: useState, useEffect, useRef, useMemo',
        'Material UI for responsive and clean design',
        'RESTful API with CRUD operations',
        'Mongoose schema and Express routers setup',
      ],
    },
    {
      id: 10,
      title: 'Pizza Menu App',
      description: 'A simple React.js app that displays a dynamic pizza menu with images, ingredients, prices, and availability. Includes restaurant open/close status and ordering features.',
      category: 'Frontend',
      technologies: ['React', 'JavaScript', 'CSS'],
      imageUrl: '/projects/pizza-menu.jpg', // TODO: add image
      githubUrl: 'https://github.com/OmarShehata1/Pizza-Menu', 
      liveUrl: '', // Add live demo URL if available
      features: [
        'Dynamic menu with availability indicators',
        'Displays open/close status of restaurant',
        '"Order Now" button when restaurant is open',
        'Responsive and clean UI',
      ],
      futureEnhancements: [
        'Interactive ordering system',
        'Shopping cart functionality',
        'Further UI improvements',
      ],
    },
    {
      id: 11,
      title: 'Prayer Time App',
      description: 'A simple web application that fetches and displays daily prayer times using an external API. Demonstrates API integration, data fetching, and clean UI presentation.',
      category: 'Frontend',
      technologies: ['JavaScript', 'HTML', 'CSS', 'API'],
      imageUrl: '/projects/prayer-time.jpg', // Replace 
      githubUrl: 'https://github.com/OmarShehata1/API-Prayer-Time', 
      liveUrl: '', // Add live demo URL if available
      features: [
        'Fetch prayer times using an external API',
        'Display daily prayer schedule in a clean UI',
        'Real-time data fetching',
        'Simple and responsive design',
      ],
    },
    {
      id: 12,
      title: 'Pig Game',
      description: 'A fun dice game built with HTML, CSS, and JavaScript. Two players compete to reach a target score by rolling a dice and holding their score strategically.',
      category: 'Frontend',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: '/projects/pig-game.jpg', // Replace with actual image path
      githubUrl: 'https://github.com/OmarShehata1/Pig-Game', 
      liveUrl: '', // Add live demo URL if available
      features: [
        'Two-player turn-based gameplay',
        'Random dice roll simulation',
        'Hold and accumulate score logic',
        'Responsive and interactive UI',
        'Game restart functionality',
      ],
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

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
            <span className="text-[rgb(var(--accent))] font-medium">My Work</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">Featured Projects</h1>
            <p className="text-[rgb(var(--text-alt))] mt-4 max-w-2xl">
              Explore my recent projects showcasing my skills and expertise in web development.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map(category => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-[rgb(var(--accent))] text-white'
                    : 'bg-[rgb(var(--background-alt))] text-[rgb(var(--text))] hover:text-[rgb(var(--accent))]'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variants={itemVariants} />
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  );
}

// Project card component
function ProjectCard({ project, variants }) {
  return (
    <motion.div
      variants={variants}
      className="bg-[rgb(var(--background-alt))] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Project Image (placeholder) */}
      <div className="h-52 bg-gradient-to-br from-[rgb(var(--accent))] to-[rgb(var(--highlight))] opacity-80 flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold">{project.title}</h3>
      </div>

      <div className="p-6">
        {/* Category Badge */}
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-[rgba(var(--accent),0.1)] text-[rgb(var(--accent))]">
          {project.category}
        </span>
        
        {/* Project Title */}
        <h3 className="text-xl font-bold mt-3">{project.title}</h3>
        
        {/* Project Description */}
        <p className="mt-2 text-[rgb(var(--text-alt))] text-sm line-clamp-2">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs rounded bg-[rgb(var(--background))] text-[rgb(var(--text-alt))]"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Project Links */}
        <div className="mt-6 flex gap-4">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-[rgb(var(--text))] hover:text-[rgb(var(--accent))] transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="h-4 w-4" />
            <span>GitHub</span>
          </motion.a>
          
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-[rgb(var(--text))] hover:text-[rgb(var(--accent))] transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt className="h-3 w-3" />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
} 