
import React from 'react';
import { Code, Palette, Server, Smartphone, Database, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js']
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Creating robust server-side applications and APIs with Node.js, Express, and various databases.',
      technologies: ['Node.js', 'Express', 'Python', 'Java', 'Spring Boot']
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Designing and optimizing database schemas for both SQL and NoSQL databases.',
      technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase']
    },
    {
      icon: Globe,
      title: 'Full-Stack Solutions',
      description: 'End-to-end development of web applications from concept to deployment.',
      technologies: ['MERN Stack', 'MEAN Stack', 'JAMstack', 'Serverless', 'Docker']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications using React Native and modern mobile frameworks.',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user experiences with modern design principles.',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research']
    }
  ];

  const techStack = [
    { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600' },
    { name: 'TypeScript', color: 'from-blue-400 to-blue-600' },
    { name: 'React', color: 'from-cyan-400 to-cyan-600' },
    { name: 'Next.js', color: 'from-gray-700 to-gray-900' },
    { name: 'Node.js', color: 'from-green-400 to-green-600' },
    { name: 'Python', color: 'from-blue-500 to-yellow-500' },
    { name: 'Java', color: 'from-red-500 to-orange-500' },
    { name: 'MongoDB', color: 'from-green-500 to-green-700' },
    { name: 'PostgreSQL', color: 'from-blue-600 to-indigo-600' },
    { name: 'Docker', color: 'from-blue-400 to-blue-600' },
    { name: 'AWS', color: 'from-orange-400 to-orange-600' },
    { name: 'Git', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Services & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I offer comprehensive development services to bring your ideas to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`px-6 py-3 bg-gradient-to-r ${tech.color} text-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold`}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
