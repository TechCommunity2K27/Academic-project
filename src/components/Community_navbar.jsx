import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code, Smartphone, Brain, Zap, Link as LinkIcon } from 'lucide-react';

const CommunityNavbar = () => {
  const location = useLocation();

  const communities = [
    {
      id: 'webdev',
      name: 'Web Dev',
      path: '/webdev',
      icon: <Code className="w-5 h-5" />,
      color: 'text-green-400'
    },
    {
      id: 'appdev',
      name: 'App Dev',
      path: '/appdev',
      icon: <Smartphone className="w-5 h-5" />,
      color: 'text-emerald-400'
    },
    {
      id: 'mlai',
      name: 'ML/AI',
      path: '/mlai',
      icon: <Brain className="w-5 h-5" />,
      color: 'text-purple-400'
    },
    {
      id: 'dsacp',
      name: 'DSA/CP',
      path: '/dsa',
      icon: <Zap className="w-5 h-5" />,
      color: 'text-yellow-400'
    },
    {
      id: 'blockchain',
      name: 'Blockchain',
      path: '/blockchain',
      icon: <LinkIcon className="w-5 h-5" />,
      color: 'text-blue-400'
    }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6">
        <nav className="flex justify-center items-center space-x-2 py-4">
          {communities.map((community) => (
            <Link
              key={community.id}
              to={community.path}
              className="relative group flex-1 max-w-[180px]"
            >
              <div
                className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive(community.path)
                    ? `${community.color}`
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
              >
                {community.icon}
                <span className="font-semibold text-sm whitespace-nowrap">{community.name}</span>
              </div>
              
              {/* Animated white underline at the bottom */}
              {isActive(community.path) && (
                <div
                  className="absolute -bottom-4 left-0 right-0 h-0.5 bg-white animate-slideIn"
                />
              )}
            </Link>
          ))}
        </nav>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: scaleX(0);
            opacity: 0;
          }
          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
          transform-origin: center;
        }
      `}</style>
    </div>
  );
};

export default CommunityNavbar;