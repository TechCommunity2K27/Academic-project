import React from 'react';
import { Smartphone, ArrowLeft, Users, Rocket, Star, Award, ExternalLink, MessageSquare } from 'lucide-react';
import CommunityNavbar from '../community_navbar';

const AppDevPage = () => {
  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Cross-Platform Development",
      description: "Build apps for iOS and Android using React Native, Flutter, and modern frameworks"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Native Performance",
      description: "Learn Swift, Kotlin, and native optimization techniques for seamless user experiences"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "UI/UX Excellence",
      description: "Design intuitive mobile interfaces that users love with Material Design and iOS guidelines"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "App Store Success",
      description: "Master deployment, ASO, and monetization strategies for both platforms"
    }
  ];

  const projects = [
    {
      title: "Fitness Tracking App",
      description: "Track workouts, calories, and progress with real-time analytics and social sharing features",
      tech: ["React Native", "Firebase", "Redux", "HealthKit"],
      difficulty: "Intermediate",
      members: 10
    },
    {
      title: "Food Delivery Platform",
      description: "Complete food ordering system with real-time tracking, payments, and restaurant management",
      tech: ["Flutter", "Node.js", "MongoDB", "Google Maps"],
      difficulty: "Advanced",
      members: 15
    },
    {
      title: "Language Learning App",
      description: "Interactive language lessons with speech recognition, gamification, and progress tracking",
      tech: ["Swift", "Core Data", "AVFoundation", "CloudKit"],
      difficulty: "Advanced",
      members: 8
    },
    {
      title: "Expense Manager",
      description: "Personal finance tracker with budget planning, expense categorization, and visual reports",
      tech: ["React Native", "SQLite", "Chart.js", "AsyncStorage"],
      difficulty: "Beginner",
      members: 12
    }
  ];

  const learningPath = [
    "Mobile UI/UX Fundamentals",
    "React Native Basics",
    "Flutter & Dart Programming",
    "State Management (Redux/Bloc)",
    "Native Modules Integration",
    "Push Notifications & Background Tasks",
    "App Store Publishing",
    "Performance Optimization"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={() => window.history.back()} className="text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold">DevCluster</h1>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Users className="w-5 h-5" />
            <span>892 members</span>
          </div>
        </div>
      </div>

      <CommunityNavbar />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-2">App Development</h2>
              <p className="text-xl text-gray-400">Create mobile experiences that matter</p>
            </div>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
            Build next-generation mobile applications for iOS and Android. Master cross-platform development, native APIs, 
            and create apps that reach millions of users worldwide.
          </p>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8">What You'll Learn</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-emerald-500 transition-all duration-300 group">
                <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
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
              <div key={index} className="flex items-center space-x-3 bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-emerald-500 transition-colors">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
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
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-emerald-500 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-semibold group-hover:text-emerald-400 transition-colors">{project.title}</h4>
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
                  <button className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center space-x-1">
                    <span className="text-sm font-semibold">View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Coming Soon */}
        <div className="bg-gradient-to-r from-emerald-900/20 to-green-900/20 rounded-2xl p-12 border border-emerald-800/30 text-center">
          <MessageSquare className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Community Chat Coming Soon</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Connect with mobile developers, share your apps, get feedback, and collaborate on exciting projects. 
            Real-time chat will be available soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDevPage;