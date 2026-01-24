import React from 'react';
import { Code, Layers, GraduationCap, Briefcase, Sparkles, Rocket, Target, Zap, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, value: '2+', label: 'Hands-on Industry Projects' },
    { icon: Layers, value: '10+', label: 'Technologies & Frameworks Worked With' },
    { icon: GraduationCap, value: 'Education', label: 'Computer Science & Engineer' },
    { icon: Briefcase, value: '1', label: 'Year Experience' },
  ];

  const whatIBring = [
    { icon: Code, text: 'Clean, maintainable code architecture' },
    { icon: Target, text: 'Efficient API development and integration' },
    { icon: Rocket, text: 'Strong debugging and optimization skills' },
    { icon: Zap, text: 'Strong problem-solving skills' },
    { icon: Users, text: 'Excellent communication and teamwork' },
  ];

  // Experience entries - you can edit these
  const experiences = [
    {
      title: 'Python Backend Developer — TOCA Football',
      description: 'I work as a Python Backend Developer, building scalable systems using Django, Celery, and RabbitMQ to handle asynchronous tasks, webhooks, and scheduled jobs. I integrate and manage data pipelines between multiple POS systems (MBO, DSR, SevenRooms, BondSports) and HubSpot CRM by fetching and transforming data from Snowflake. My work focuses on ensuring smooth automation, optimized performance, and cloud deployment on AWS EC2, enabling efficient data-driven insights for business teams.'
    },
    {
      title: 'Full-Stack AI Developer — CRMOne (AI Social Media Planner)',
      description: 'I worked as a Full-Stack AI Developer, building an AI-powered Social Media Planner using FastAPI, LangChain, and LangGraph for the backend and React for the frontend. I developed an AI chatbot that gathers brand details through dynamic conversations and generates customized social media posts with captions and visuals for platforms like Instagram, Facebook, LinkedIn, and Twitter. I also implemented flexible user settings for topic preferences, date filters, and scheduling, delivering an intelligent and user-friendly automation platform.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Developer Profile</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">Me</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate developer crafting <span className="text-gray-900 dark:text-white font-semibold">innovative solutions</span> that make a difference
          </p>
        </div>

        {/* Main Intro Section */}
        <div className="relative mb-20">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 dark:from-blue-600/10 dark:via-purple-600/10 dark:to-blue-600/10 rounded-3xl"></div>

          <div className="relative bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-gray-700 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left - Content */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  Turning Ideas Into
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Reality Through Code</span>
                </h3>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  I'm a <span className="font-semibold text-gray-900 dark:text-white">full-stack developer</span> with 1 year of hands-on experience building modern web applications. My passion lies in transforming complex challenges into elegant, user-friendly solutions.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  From crafting responsive frontends to architecting scalable backends, I bring dedication and creativity to every project I touch.
                </p>
              </div>

              {/* Right - Skills Grid */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-blue-600" />
                  What I Bring
                </h4>

                <div className="grid gap-3">
                  {whatIBring.map((item, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center mr-4">
                    <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.title}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;