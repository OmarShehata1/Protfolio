import { motion, useInView } from 'framer-motion';
import AnimatedPage from '../components/core/AnimatedPage';
import { useRef } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { FaReact, FaNodeJs, FaJs, FaPython, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiMongodb, SiTailwindcss, SiRedux, SiVite } from 'react-icons/si';

export default function AboutPage() {
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: true, margin: "-100px" });

  // Skills with icon and proficiency
  const skills = [
    { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
    { name: 'Express.js', icon: <SiExpress />, level: 85 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
    { name: 'JavaScript', icon: <FaJs />, level: 85 },
    { name: 'HTML', icon: <FaHtml5 />, level: 90 },
    { name: 'CSS', icon: <FaCss3Alt />, level: 90 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 80 },
    { name: 'TypeScript', icon: <SiTypescript />, level: 50 },
    { name: 'React.js', icon: <FaReact />, level: 40 },
    // { name: 'Redux', icon: <SiRedux />, level: 70 },
    { name: 'Vite', icon: <SiVite />, level: 75 },
    // { name: 'Python', icon: <FaPython />, level: 65 },
  ];

  // Render skill bar with animation
  const SkillBar = ({ skill }) => (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        <span className="text-xl mr-2 text-[rgb(var(--accent))]">{skill.icon}</span>
        <h4 className="font-medium">{skill.name}</h4>
        <span className="ml-auto text-sm font-mono text-[rgb(var(--text-alt))]">{skill.level}%</span>
      </div>
      <div className="h-2 w-full bg-[rgb(var(--background-alt))] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--highlight))]"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );

  return (
    <AnimatedPage>
      <section className="page-section pt-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[rgb(var(--accent))] font-medium">About Me</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-8">Get to know me better</h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-[rgb(var(--background-alt))] p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Background</h2>
                <p className="text-[rgb(var(--text-alt))] mb-4">
                  I'm a Computer and Control Systems Engineering student passionate about web development. With a strong foundation in embedded systems, I've transitioned my focus to creating dynamic and responsive web applications.
                </p>
                <p className="text-[rgb(var(--text-alt))] mb-4">
                  My journey began with embedded systems, but I quickly discovered my passion for web development. This shift has allowed me to combine my technical engineering knowledge with creative design skills to build intuitive user interfaces.
                </p>
                <p className="text-[rgb(var(--text-alt))]">
                  I'm constantly learning and expanding my skills through personal projects and freelance work, with a particular interest in modern JavaScript frameworks and responsive design principles.
                </p>
              </div>

              <div className="bg-[rgb(var(--background-alt))] p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Career Goals</h2>
                <ul className="space-y-3">
                  {[
                    "Develop expertise in full-stack web development",
                    "Build scalable and accessible web applications",
                    "Master modern JavaScript frameworks and libraries",
                    "Contribute to open source projects",
                    "Specialize in creating intuitive user interfaces"
                  ].map((goal, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start"
                    >
                      <RiArrowRightSLine className="mt-1 mr-2 text-[rgb(var(--accent))]" />
                      <span className="text-[rgb(var(--text-alt))]">{goal}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              ref={skillsRef}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-[rgb(var(--background-alt))] p-6 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-6">My Skills</h2>
              <div className="grid grid-cols-1 gap-4">
                {skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
} 