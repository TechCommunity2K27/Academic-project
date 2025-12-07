import React from 'react';
import { Code, ArrowLeft, Users, Rocket, Star, Award, ExternalLink, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CommunityNavbar from '../community_navbar';

const WebDevPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Mastery",
      description: "Master React, Vue, Angular and modern CSS frameworks to build stunning user interfaces"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Backend Excellence",
      description: "Learn Node.js, Express, Django, and build scalable REST APIs and GraphQL servers"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Full-Stack Projects",
      description: "Work on complete applications from database design to deployment"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Best Practices",
      description: "Learn industry standards, design patterns, and code optimization techniques"
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration, cart management, and admin dashboard",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      difficulty: "Advanced",
      members: 12
    },
    {
      title: "Social Media Dashboard",
      description: "Real-time social networking platform with posts, comments, likes, and user authentication",
      tech: ["Next.js", "PostgreSQL", "Socket.io", "Redis"],
      difficulty: "Intermediate",
      members: 8
    },
    {
      title: "Project Management Tool",
      description: "Collaborative workspace for teams with task tracking, file sharing, and real-time updates",
      tech: ["Vue.js", "Express", "MongoDB", "AWS"],
      difficulty: "Advanced",
      members: 10
    },
    {
      title: "Portfolio Builder",
      description: "Dynamic portfolio generator with customizable templates and CMS integration",
      tech: ["React", "Tailwind", "Sanity", "Vercel"],
      difficulty: "Beginner",
      members: 15
    }
  ];

  const learningPath = [
    "HTML5 & CSS3 Fundamentals",
    "JavaScript ES6+ Mastery",
    "React.js & State Management",
    "Node.js & Express Backend",
    "Database Design (SQL & NoSQL)",
    "RESTful API Development",
    "Authentication & Authorization",
    "Deployment & DevOps Basics"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold">DevCluster</h1>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Users className="w-5 h-5" />
            <span>1,247 members</span>
          </div>
        </div>
      </div>

      {/* Community Navigation */}
      <CommunityNavbar />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
              <Code className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-2">Web Development</h2>
              <p className="text-xl text-gray-400">Build the future of the internet</p>
            </div>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
            Master the art of creating stunning websites and powerful web applications. From responsive frontends to scalable backends, 
            dive deep into the world of web technologies and build projects that impact millions of users.
          </p>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8">What You'll Learn</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-green-500 transition-all duration-300 group">
                <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div className="mb-16 bg-gray-900 rounded-2xl p-8 border border-gray-800">
          <h3 className="text-3xl font-bold mb-6">Learning Roadmap</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {learningPath.map((topic, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-green-500 transition-colors">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-gray-300 text-sm">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-green-500 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-semibold group-hover:text-green-400 transition-colors">{project.title}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    project.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {project.difficulty}
                  </span>
                </div>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{project.members} collaborators</span>
                  </div>
                  <button className="text-green-400 hover:text-green-300 transition-colors flex items-center space-x-1">
                    <span className="text-sm font-semibold">View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Coming Soon */}
        <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-2xl p-12 border border-green-800/30 text-center">
          <MessageSquare className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Community Chat Coming Soon</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Connect with fellow web developers in real-time. Share code snippets, ask questions, and collaborate on projects. 
            Our dedicated chat platform will be available soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebDevPage;