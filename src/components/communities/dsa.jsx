import React from 'react';
import { Zap, ArrowLeft, Users, Target, Trophy, Award, ExternalLink, MessageSquare } from 'lucide-react';
import CommunityNavbar from '../community_navbar';

const DSACPPage = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Algorithm Mastery",
      description: "Master sorting, searching, graph algorithms, and dynamic programming techniques"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Data Structures",
      description: "Deep dive into arrays, trees, graphs, heaps, and advanced data structures"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Competitive Programming",
      description: "Excel in Codeforces, LeetCode, and other competitive coding platforms"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Interview Prep",
      description: "Ace technical interviews at top tech companies with proven strategies"
    }
  ];

  const projects = [
    {
      title: "Algorithm Visualizer",
      description: "Interactive platform to visualize sorting, searching, and graph algorithms in real-time",
      tech: ["React", "D3.js", "TypeScript", "Tailwind"],
      difficulty: "Intermediate",
      members: 16
    },
    {
      title: "Online Judge System",
      description: "Complete coding platform with test case evaluation, leaderboards, and contest hosting",
      tech: ["Node.js", "Docker", "Redis", "PostgreSQL"],
      difficulty: "Advanced",
      members: 10
    },
    {
      title: "Interview Prep Portal",
      description: "Curated collection of problems categorized by topic, company, and difficulty level",
      tech: ["Next.js", "MongoDB", "Auth0", "Vercel"],
      difficulty: "Beginner",
      members: 20
    },
    {
      title: "Code Contest Platform",
      description: "Host coding competitions with real-time scoring and automated plagiarism detection",
      tech: ["Python", "Django", "Celery", "AWS"],
      difficulty: "Advanced",
      members: 8
    }
  ];

  const learningPath = [
    "Time & Space Complexity",
    "Arrays & Strings",
    "Linked Lists & Stacks",
    "Trees & Graphs",
    "Sorting & Searching",
    "Dynamic Programming",
    "Greedy Algorithms",
    "Advanced Topics"
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
            <span>2,134 members</span>
          </div>
        </div>
      </div>

      <CommunityNavbar />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-2">DSA/CP</h2>
              <p className="text-xl text-gray-400">Master algorithms and ace coding challenges</p>
            </div>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
            Sharpen your problem-solving skills and algorithmic thinking. Excel in coding interviews, competitive programming contests, 
            and build a strong foundation for your tech career.
          </p>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8">What You'll Learn</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-yellow-500 transition-all duration-300 group">
                <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform">
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
              <div key={index} className="flex items-center space-x-3 bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-yellow-500 transition-colors">
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
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
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-yellow-500 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-semibold group-hover:text-yellow-400 transition-colors">{project.title}</h4>
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
                  <button className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center space-x-1">
                    <span className="text-sm font-semibold">View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Coming Soon */}
        <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-2xl p-12 border border-yellow-800/30 text-center">
          <MessageSquare className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Community Chat Coming Soon</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discuss problem-solving strategies, share contest experiences, and practice mock interviews together. 
            Join our competitive programming community chat soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DSACPPage;