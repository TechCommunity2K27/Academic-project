
import React from 'react';
import { Brain, ArrowLeft, Users, Target, Lightbulb, TrendingUp, ExternalLink, MessageSquare } from 'lucide-react';
import CommunityNavbar from '../community_navbar';

const MLAIPage = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Deep Learning",
      description: "Master neural networks, CNNs, RNNs, and transformers for cutting-edge AI applications"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Computer Vision",
      description: "Build image recognition, object detection, and video analysis systems"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Natural Language Processing",
      description: "Create chatbots, sentiment analysis, and language understanding models"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Data Science",
      description: "Analyze data, build predictive models, and extract actionable insights"
    }
  ];

  const projects = [
    {
      title: "Image Classification System",
      description: "CNN-based model for real-time image recognition with 95% accuracy on custom datasets",
      tech: ["PyTorch", "OpenCV", "FastAPI", "Docker"],
      difficulty: "Advanced",
      members: 9
    },
    {
      title: "Chatbot Assistant",
      description: "NLP-powered conversational AI with context awareness and multi-language support",
      tech: ["Transformers", "Hugging Face", "BERT", "Flask"],
      difficulty: "Intermediate",
      members: 11
    },
    {
      title: "Stock Price Predictor",
      description: "LSTM model for financial forecasting with technical indicator integration",
      tech: ["TensorFlow", "Pandas", "Scikit-learn", "Plotly"],
      difficulty: "Advanced",
      members: 7
    },
    {
      title: "Sentiment Analyzer",
      description: "Real-time sentiment analysis for social media posts and customer reviews",
      tech: ["Python", "NLTK", "Streamlit", "MongoDB"],
      difficulty: "Beginner",
      members: 14
    }
  ];

  const learningPath = [
    "Python & NumPy Fundamentals",
    "Machine Learning Basics",
    "Deep Learning with TensorFlow",
    "Computer Vision & CNNs",
    "NLP & Transformers",
    "Model Deployment & MLOps",
    "Reinforcement Learning",
    "AI Ethics & Best Practices"
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
            <span>1,156 members</span>
          </div>
        </div>
      </div>

      <CommunityNavbar />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-2">ML/AI</h2>
              <p className="text-xl text-gray-400">Shape the future with artificial intelligence</p>
            </div>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
            Explore the frontiers of Machine Learning and Artificial Intelligence. Build intelligent systems, from neural networks 
            to computer vision, and create AI solutions that transform industries.
          </p>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8">What You'll Learn</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition-all duration-300 group">
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform">
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
              <div key={index} className="flex items-center space-x-3 bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-purple-500 transition-colors">
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
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
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">{project.title}</h4>
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
                  <button className="text-purple-400 hover:text-purple-300 transition-colors flex items-center space-x-1">
                    <span className="text-sm font-semibold">View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Coming Soon */}
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-12 border border-purple-800/30 text-center">
          <MessageSquare className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Community Chat Coming Soon</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discuss AI research, share model architectures, and collaborate on groundbreaking ML projects. 
            Join the conversation when our chat launches!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MLAIPage;