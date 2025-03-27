import React from 'react'
import { FaGithub, FaLinkedin, FaGlobe, FaCode, FaServer, FaDatabase, FaCss3Alt, FaHtml5, FaGitAlt, FaTerminal } from 'react-icons/fa';
import img1 from '../img/profile1.png';

function About() {
    const skillsData = [
        { name: 'HTML5', icon: <FaHtml5 size={48} />, bg: 'bg-orange-200' },
        { name: 'CSS3', icon: <FaCss3Alt size={48} />, bg: 'bg-blue-200' },
        { name: 'Tailwind CSS', icon: <FaCode size={48} />, bg: 'bg-teal-200' },
        { name: 'Bootstrap', icon: <FaCode size={48} />, bg: 'bg-purple-200' },
        { name: 'JavaScript', icon: <FaCode size={48} />, bg: 'bg-yellow-200' },
        { name: 'ReactJS', icon: <FaCode size={48} />, bg: 'bg-blue-200' },
        { name: 'Node.js', icon: <FaServer size={48} />, bg: 'bg-green-200' },
        { name: 'ExpressJS', icon: <FaTerminal size={48} />, bg: 'bg-gray-200' },
        { name: 'MongoDB', icon: <FaDatabase size={48} />, bg: 'bg-green-200' },
        { name: 'Git', icon: <FaGitAlt size={48} />, bg: 'bg-red-200' },
      ];
    return (
        <div className="bg-gradient-to-br from-gray-800 to-black min-h-screen flex items-center p-8">
        <div className="container mx-auto text-white space-y-8 text-center">
          <h1 className="text-6xl font-extrabold">About Me</h1>
          <p className="text-gray-400 leading-relaxed text-xl max-w-4xl mx-auto">
            I'm Pravesh Prajapati, a passionate MERN Stack Developer with experience in building dynamic and responsive web applications.
            I love solving problems and continuously improving my skills. From front-end design to back-end logic, I enjoy working across the full stack.
          </p>
          <div className="flex justify-center space-x-8 mt-8">
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <FaGithub size={48} />
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <FaLinkedin size={48} />
            </a>
            <a href="https://your-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <FaGlobe size={48} />
            </a>
          </div>
  
          {/* Skills Section in About Page */}
          <h2 className="text-5xl font-extrabold mt-16">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            {skillsData.map((skill, index) => (
              <div key={index} className={`${skill.bg} p-6 text-gray-700 rounded-xl shadow-lg flex flex-col items-center`}> 
                {skill.icon}
                <h3 className="text-xl font-semibold mt-2">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
  
    )
}

export default About