import { motion } from 'framer-motion';
import AnimatedPage from '../components/core/AnimatedPage';
import { FaGraduationCap, FaCertificate, FaBookOpen } from 'react-icons/fa';
import { MdWorkOutline } from 'react-icons/md';

export default function EducationPage() {
  // Education data
  const education = {
    academic: [
      {
        id: 1,
        degree: 'Bachelor of Engineering',
        institution: 'Mansoura University',
        department: 'Computer and Control Systems',
        period: '2020 - 2025',
        description: 'Studying computer engineering fundamentals, and control theory with focus on practical applications.',
        icon: <FaGraduationCap className="h-6 w-6" />,
      },
    ],
    training: [
      {
        id: 1,
        title: 'BI Development Intern',
        institution: 'ITI Mansoura',
        period: 'Jul 2024 - Sep 2024',
        description: 'Training in Business Intelligence development including SQL, data warehousing, ETL processes, and dashboard creation.',
        icon: <MdWorkOutline className="h-6 w-6" />,
      },
      {
        id: 2,
        title: 'Embedded Systems Diploma',
        institution: 'Independent Study',
        period: 'Oct 2023 - May 2024',
        description: 'Comprehensive study of embedded systems including C, Data Structures, Algorithms and microcontrollers',
        icon: <FaBookOpen className="h-6 w-6" />,
      },
      {
        id: 3,
        title: 'IoT Intern',
        institution: 'National Communications Institute (NTI)',
        period: 'Jun 2023 - Jul 2023',
        description: 'Practical training in Internet of Things concepts, including sensor networks, data collection, and cloud integration.',
        icon: <MdWorkOutline className="h-6 w-6" />,
      },
    ],
    certifications: [
      {
        id: 1,
        title: 'The Complete 2024 Web Development Bootcamp',
        issuer: 'Udemy',
        date: 'March 2024',
        icon: <FaCertificate className="h-6 w-6" />,
      },
      {
        id: 2,
        title: 'ITI certified Business Intelligence',
        issuer: 'ITI Mansoura',
        date: 'January 2024',
        icon: <FaCertificate className="h-6 w-6" />,
      },
      {
        id: 5,
        title: 'NTI certified IoT',
        issuer: 'NTI Mansoura',
        date: 'November 2023',
        icon: <FaCertificate className="h-6 w-6" />,
      },
      {
        id: 4,
        title: 'PCAP - Programming Essentials in Python',
        issuer: 'Cisco',
        date: 'November 2023',
        icon: <FaCertificate className="h-6 w-6" />,
      },
    ],
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
            <span className="text-[rgb(var(--accent))] font-medium">Education & Training</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">Academic Background</h1>
            <p className="text-[rgb(var(--text-alt))] mt-4 max-w-2xl">
              My educational journey, professional training, and certifications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Education & Training */}
            <div className="space-y-12">
              {/* Academic Education */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <FaGraduationCap className="mr-3 text-[rgb(var(--accent))]" /> Academic Education
                </h2>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8"
                >
                  {education.academic.map((item) => (
                    <TimelineItem key={item.id} item={item} variants={itemVariants} />
                  ))}
                </motion.div>
              </div>

              {/* Professional Training */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <MdWorkOutline className="mr-3 text-[rgb(var(--accent))]" /> Professional Training
                </h2>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8"
                >
                  {education.training.map((item) => (
                    <TimelineItem key={item.id} item={item} variants={itemVariants} />
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Right Column: Certifications */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FaCertificate className="mr-3 text-[rgb(var(--accent))]" /> Certifications
              </h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 gap-4"
              >
                {education.certifications.map((cert) => (
                  <CertificateCard key={cert.id} cert={cert} variants={itemVariants} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}

// Timeline item component
function TimelineItem({ item, variants }) {
  return (
    <motion.div
      variants={variants}
      className="relative pl-10 pb-8 border-l border-[rgba(var(--text),0.1)]"
    >
      {/* Timeline dot */}
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-[rgb(var(--accent))]" />
      
      {/* Content */}
      <div className="bg-[rgb(var(--background-alt))] p-6 rounded-xl">
        <span className="block text-sm text-[rgb(var(--accent))]">{item.period}</span>
        <h3 className="text-xl font-bold mt-1">{item.degree || item.title}</h3>
        <p className="font-medium text-[rgb(var(--text))]">{item.institution}</p>
        {item.department && (
          <p className="text-[rgb(var(--text-alt))] text-sm mt-1">Department: {item.department}</p>
        )}
        <p className="mt-3 text-[rgb(var(--text-alt))]">{item.description}</p>
      </div>
    </motion.div>
  );
}

// Certificate card component
function CertificateCard({ cert, variants }) {
  return (
    <motion.div
      variants={variants}
      className="bg-[rgb(var(--background-alt))] p-5 rounded-xl flex items-start gap-4"
    >
      <div className="text-[rgb(var(--accent))]">{cert.icon}</div>
      <div>
        <h3 className="font-bold">{cert.title}</h3>
        <div className="flex items-center justify-between mt-1">
          <span className="text-sm text-[rgb(var(--text-alt))] mr-10">{cert.issuer}</span>
          <span className="text-sm font-medium text-[rgb(var(--accent))]">{cert.date}</span>
        </div>
      </div>
    </motion.div>
  );
} 