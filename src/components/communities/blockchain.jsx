import React from 'react';
import { Link, ArrowLeft, Users, Rocket, Star, Award, ExternalLink, MessageSquare, Shield } from 'lucide-react';
import CommunityNavbar from '../community_navbar';

const BlockchainPage = () => {
  const features = [
    {
      icon: <Link className="w-6 h-6" />,
      title: "Smart Contracts",
      description: "Master Solidity and create self-executing contracts on Ethereum and other blockchains"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "DApp Development",
      description: "Build decentralized applications with Web3.js, Ethers.js, and modern frontend frameworks"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "DeFi Protocols",
      description: "Create decentralized finance solutions including DEXs, lending platforms, and yield farming"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "NFT & Tokenomics",
      description: "Design and launch NFT collections, tokens, and understand blockchain economics"
    }
  ];

  const projects = [
    {
      title: "DeFi Lending Platform",
      description: "Decentralized peer-to-peer lending protocol with collateral management and interest rates",
      tech: ["Solidity", "Hardhat", "React", "Ethers.js"],
      difficulty: "Advanced",
      members: 6
    },
    {
      title: "NFT Marketplace",
      description: "Complete marketplace for minting, buying, selling, and trading NFTs with royalty support",
      tech: ["Solidity", "IPFS", "Next.js", "Web3.js"],
      difficulty: "Intermediate",
      members: 9
    },
    {
      title: "DAO Governance System",
      description: "Decentralized autonomous organization with voting mechanisms and treasury management",
      tech: ["Solidity", "Snapshot", "React", "TheGraph"],
      difficulty: "Advanced",
      members: 5
    },
    {
      title: "Cryptocurrency Wallet",
      description: "Secure multi-chain wallet with transaction history and token swap functionality",
      tech: ["React Native", "Web3.js", "MetaMask", "Firebase"],
      difficulty: "Beginner",
      members: 11
    }
  ];

  const learningPath = [
    "Blockchain Fundamentals",
    "Solidity Programming",
    "Smart Contract Development",
    "Web3.js & Ethers.js",
    "DApp Frontend Integration",
    "Security & Auditing",
    "DeFi Protocol Design",
    "NFT Standards & Deployment"
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
            <span>567 members</span>
          </div>
        </div>
      </div>

        <CommunityNavbar />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
              <Link className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-2">Blockchain</h2>
              <p className="text-xl text-gray-400">Build the decentralized future</p>
            </div>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
            Revolutionize industries with blockchain technology. Create smart contracts, DeFi protocols, and decentralized applications 
            that empower users and reshape the digital economy.
          </p>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8">What You'll Learn</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300 group">
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
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
              <div key={index} className="flex items-center space-x-3 bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-colors">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
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
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">{project.title}</h4>
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
                  <button className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1">
                    <span className="text-sm font-semibold">View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Coming Soon */}
        <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-12 border border-blue-800/30 text-center">
          <MessageSquare className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Community Chat Coming Soon</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Connect with blockchain enthusiasts, discuss smart contract security, share DeFi ideas, and collaborate on Web3 projects. 
            Decentralized chat coming soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlockchainPage;