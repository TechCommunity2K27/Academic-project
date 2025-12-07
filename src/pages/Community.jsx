import React, { useState } from 'react';
import { Users, Code, Smartphone, Brain, Zap, Link, ChevronRight, Star, Target, Lightbulb, Trophy, MessageSquare, Calendar, BookOpen, Globe, Rocket, Shield, Award, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CommunityPage = () => {
    const navigate = useNavigate();
    const [showCommunities, setShowCommunities] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    const communities = [
        {
            id: 'webdev',
            name: 'Web Development',
            icon: <Code className="w-8 h-8" />,
            description: 'Master the art of creating stunning websites and powerful web applications',
            detailedDescription: 'From responsive frontends to scalable backends, dive deep into the world of web technologies. Learn modern frameworks, best practices, and industry standards.',
            technologies: ['React', 'Node.js', 'Angular', 'Vue.js', 'Django', 'Express.js', 'MongoDB', 'PostgreSQL'],
            members: '1,247',
            color: 'from-green-500 to-emerald-500',
            projects: ['E-commerce Platforms', 'Social Media Apps', 'Portfolio Websites', 'SaaS Applications'],
            skills: ['Frontend Development', 'Backend APIs', 'Database Design', 'DevOps', 'UI/UX Integration'],
            routes: '/webdev'
        },
        {
            id: 'appdev',
            name: 'App Development',
            icon: <Smartphone className="w-8 h-8" />,
            description: 'Build next-generation mobile applications for iOS and Android platforms',
            detailedDescription: 'Create intuitive mobile experiences that millions of users will love. Master cross-platform development and native app optimization techniques.',
            technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic', 'Firebase', 'SQLite'],
            members: '892',
            color: 'from-green-500 to-emerald-500',
            projects: ['Social Apps', 'Productivity Tools', 'Gaming Apps', 'Health & Fitness Apps'],
            skills: ['Cross-platform Development', 'Native Programming', 'App Store Optimization', 'Mobile UI/UX', 'Performance Optimization'],
            routes: '/appdev'
        },
        {
            id: 'mlai',
            name: 'ML/AI',
            icon: <Brain className="w-8 h-8" />,
            description: 'Explore the frontiers of Machine Learning and Artificial Intelligence',
            detailedDescription: 'Shape the future with intelligent systems. From neural networks to computer vision, learn cutting-edge AI technologies that are transforming industries.',
            technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter'],
            members: '1,156',
            color: 'from-green-500 to-emerald-500',
            projects: ['Computer Vision Systems', 'NLP Applications', 'Recommendation Engines', 'Predictive Models'],
            skills: ['Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Data Science', 'Model Deployment'],
            routes: '/mlai'
        },
        {
            id: 'dsacp',
            name: 'DSA/CP',
            icon: <Zap className="w-8 h-8" />,
            description: 'Master Data Structures, Algorithms & Competitive Programming',
            detailedDescription: 'Sharpen your problem-solving skills and algorithmic thinking. Excel in coding interviews and competitive programming contests.',
            technologies: ['C++', 'Java', 'Python', 'Codeforces', 'LeetCode', 'HackerRank', 'AtCoder', 'CodeChef'],
            members: '2,134',
            color: 'from-green-500 to-emerald-500',
            projects: ['Contest Participation', 'Interview Prep', 'Algorithm Visualization', 'Coding Bootcamps'],
            skills: ['Algorithm Design', 'Problem Solving', 'Time Complexity Analysis', 'System Design', 'Mathematical Thinking'],
            routes: '/dsa'
        },
        {
            id: 'blockchain',
            name: 'Blockchain',
            icon: <Link className="w-8 h-8" />,
            description: 'Build the decentralized future with blockchain and Web3 technologies',
            detailedDescription: 'Revolutionize industries with blockchain technology. Create smart contracts, DeFi protocols, and decentralized applications.',
            technologies: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts', 'IPFS', 'Hardhat', 'MetaMask', 'Truffle'],
            members: '567',
            color: 'from-green-500 to-emerald-500',
            projects: ['DeFi Protocols', 'NFT Marketplaces', 'DAOs', 'Cryptocurrency Wallets'],
            skills: ['Smart Contract Development', 'Blockchain Architecture', 'Tokenomics', 'Security Auditing', 'DApp Development'],
            routes: '/blockchain'
        }
    ];

    const benefits = [
        {
            icon: <Users className="w-6 h-6" />,
            title: 'Peer-to-Peer Learning',
            description: 'Learn from students who understand your academic environment and share similar challenges.',
            details: 'Connect with peers who are on the same journey, making learning more relatable and effective.'
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: 'Career Acceleration',
            description: 'Build professional networks that will fast-track your career in the tech industry.',
            details: 'Access mentorship, internship opportunities, and job referrals from your college network.'
        },
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: 'Knowledge Exchange',
            description: 'Share resources, tutorials, and collaborate on solving complex technical problems.',
            details: 'Create a knowledge repository that benefits everyone in your academic community.'
        },
        {
            icon: <Star className="w-6 h-6" />,
            title: 'Project Collaboration',
            description: 'Find passionate teammates for hackathons, projects, and startup ventures.',
            details: 'Transform ideas into reality with like-minded individuals who share your vision.'
        },
        {
            icon: <Trophy className="w-6 h-6" />,
            title: 'Skill Recognition',
            description: 'Showcase your expertise and get recognized for your contributions to the community.',
            details: 'Build your reputation and personal brand within your college tech ecosystem.'
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: 'Industry Exposure',
            description: 'Stay updated with industry trends and connect with professionals and alumni.',
            details: 'Bridge the gap between academic learning and real-world industry requirements.'
        }
    ];

    const features = [
        {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "Discussion Forums",
            description: "Engage in technical discussions, ask questions, and share insights"
        },
        {
            icon: <Calendar className="w-6 h-6" />,
            title: "Regular Events",
            description: "Workshops, hackathons, coding contests, and tech talks"
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Resource Library",
            description: "Curated learning materials, tutorials, and project repositories"
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Mentorship Programs",
            description: "Connect with senior students and industry professionals"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % communities.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + communities.length) % communities.length);
    };

    // Get communities to show based on screen size
    const getVisibleCommunities = () => {
        const result = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % communities.length;
            result.push(communities[index]);
        }
        return result;
    };

    const visibleCommunities = getVisibleCommunities();

    return (
        <div className="min-h-screen bg-black text-white">

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6">
                {/* <div className="text-center mb-20 pt-10">
                    <span className="text-4xl md:text-5xl lg:text-5xl font-bold px-5 mb-8 bg-gradient-to-r from-[#1fe3ea] via-purple-200 to-pink-100 bg-clip-text text-transparent leading-tight ">
                        Our
                    </span>
                    <span className="text-4xl md:text-5xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-[#11e1e8] via-purple-200 to-pink-100 bg-clip-text text-transparent leading-tight">
                        Communities
                    </span>
                    <h2 className="text-1xl md:text-3xl lg:text-3xl font-bold mb-8 bg-gradient-to-r from-[#00F5FF] via-purple-200 to-pink-100 bg-clip-text text-transparent leading-tight">
                        Unite - Learn - Code
                    </h2>
                    <p className="text-1xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Join the most vibrant tech communities in your college.
                    </p>
                    <p className="text-1xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                        Connect with passionate students, collaborate on groundbreaking projects, and accelerate your journey to becoming a tech leader.
                    </p>
                    <div className="flex justify-center space-x-12 text-lg text-gray-400">
                        <span> Innovation Focused</span>
                        <span> Peer-to-Peer Learning</span>
                        <span> Career Oriented</span>
                    </div>
                </div> */}


                {/* Benefits Section */}
                <div className="mb-20">
                    <h3 className="text-4xl md:text-5xl lg:text-5xl text-center font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                        Why Join Our Communities?
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-colors group">
                                <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                                    {benefit.icon}
                                </div>
                                <h4 className="text-xl font-semibold mb-4 text-blue-400">{benefit.title}</h4>
                                <p className="text-gray-300 mb-4">{benefit.description}</p>
                                <p className="text-sm text-gray-500">{benefit.details}</p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Communities Carousel */}
                {showCommunities && (
                    <div className="space-y-12 animate-in">
                        <h3 className="text-4xl md:text-5xl lg:text-5xl text-center font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                            Our Communities
                        </h3>

                        {/* Desktop View - 3 communities */}
                        <div className="hidden lg:block relative">
                            <div className="flex items-center justify-center space-x-8">
                                {/* Left Arrow */}
                                <button
                                    onClick={prevSlide}
                                    className="bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 p-4 rounded-full transition-all duration-300 hover:scale-110"
                                >
                                    <ChevronLeft className="w-6 h-6 text-gray-300" />
                                </button>

                                {/* Communities Grid */}
                                <div className="grid grid-cols-3 gap-6 flex-1 max-w-7xl">
                                    {visibleCommunities.map((community, index) => (
                                        <div
                                            key={`${community.id}-${currentIndex}-${index}`}
                                            className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 flex flex-col"
                                        >
                                            <div className="flex flex-col items-center mb-6">
                                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${community.color} flex items-center justify-center text-white mb-4`}>
                                                    {community.icon}
                                                </div>
                                                <h3 className="text-xl font-bold mb-2 text-center">{community.name}</h3>
                                                <p className="text-gray-400 mb-3 text-center text-sm">{community.description}</p>
                                                <div className="flex items-center text-xs text-gray-500">
                                                    <Users className="w-3 h-3 mr-1" />
                                                    {community.members} members
                                                </div>
                                            </div>

                                            <p className="text-gray-300 mb-4 text-xs leading-relaxed text-center">{community.detailedDescription}</p>

                                            <div className="mb-6">
                                                <h4 className="text-xs font-semibold text-gray-400 mb-2">Projects:</h4>
                                                <div className="space-y-1">
                                                    {community.projects.slice(0, 2).map((project, projectIndex) => (
                                                        <div key={projectIndex} className="text-xs text-gray-500 flex items-center">
                                                            <Rocket className="w-3 h-3 mr-2 text-blue-400" />
                                                            {project}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between mt-auto">
                                                <div className="flex items-center space-x-2 text-xs text-gray-500">
                                                    <MessageSquare className="w-3 h-3" />
                                                    <Calendar className="w-3 h-3" />
                                                </div>
                                                <button className={`px-4 py-2 bg-gradient-to-r ${community.color} text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg`}
                                                    onClick={() => { navigate(community.routes) }}>
                                                    Join Now
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Right Arrow */}
                                <button
                                    onClick={nextSlide}
                                    className="bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 p-4 rounded-full transition-all duration-300 hover:scale-110"
                                >
                                    <ChevronRight className="w-6 h-6 text-gray-300" />
                                </button>
                            </div>

                            {/* Dots Indicator */}
                            <div className="flex justify-center space-x-2 mt-8">
                                {communities.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-400 w-8' : 'bg-gray-600 hover:bg-gray-500'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Mobile/Tablet View - 1 community */}
                        <div className="lg:hidden relative">
                            <div className="flex items-center justify-center space-x-4">
                                {/* Left Arrow */}
                                <button
                                    onClick={prevSlide}
                                    className="bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 p-3 rounded-full transition-all duration-300"
                                >
                                    <ChevronLeft className="w-5 h-5 text-gray-300" />
                                </button>

                                {/* Single Community Card */}
                                <div className="flex-1 max-w-md">
                                    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                                        <div className="flex items-start mb-6">
                                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${communities[currentIndex].color} flex items-center justify-center text-white mr-4`}>
                                                {communities[currentIndex].icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold mb-2">{communities[currentIndex].name}</h3>
                                                <p className="text-gray-400 mb-2 text-sm">{communities[currentIndex].description}</p>
                                                <div className="flex items-center text-xs text-gray-500">
                                                    <Users className="w-3 h-3 mr-1" />
                                                    {communities[currentIndex].members} members
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{communities[currentIndex].detailedDescription}</p>

                                        <div className="mb-4">
                                            <h4 className="text-xs font-semibold text-gray-400 mb-2">Technologies:</h4>
                                            <div className="flex flex-wrap gap-1">
                                                {communities[currentIndex].technologies.slice(0, 6).map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {communities[currentIndex].technologies.length > 6 && (
                                                    <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">
                                                        +{communities[currentIndex].technologies.length - 6} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="text-xs font-semibold text-gray-400 mb-2">Popular Projects:</h4>
                                            <div className="grid grid-cols-2 gap-1">
                                                {communities[currentIndex].projects.map((project, projectIndex) => (
                                                    <div key={projectIndex} className="text-xs text-gray-500 flex items-center">
                                                        <Rocket className="w-3 h-3 mr-1 text-blue-400" />
                                                        {project}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3 text-xs text-gray-500">
                                                <span className="flex items-center">
                                                    <MessageSquare className="w-3 h-3 mr-1" />
                                                    Active
                                                </span>
                                                <span className="flex items-center">
                                                    <Calendar className="w-3 h-3 mr-1" />
                                                    Events
                                                </span>
                                            </div>
                                            <button className={`px-4 py-2 bg-gradient-to-r ${communities[currentIndex].color} text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg`}>
                                                Join Community
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Arrow */}
                                <button
                                    onClick={nextSlide}
                                    className="bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 p-3 rounded-full transition-all duration-300"
                                >
                                    <ChevronRight className="w-5 h-5 text-gray-300" />
                                </button>
                            </div>

                            {/* Mobile Dots Indicator */}
                            <div className="flex justify-center space-x-2 mt-6">
                                {communities.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-400 w-6' : 'bg-gray-600 hover:bg-gray-500'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Community Counter */}
                            <div className="text-center mt-4">
                                <span className="text-sm text-gray-500">
                                    {currentIndex + 1} of {communities.length} communities
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Future Impact Section */}
                <div className="mt-24 text-center">
                    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl p-16 border border-gray-800">
                        <h3 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Shape Tomorrow's Technology Today
                        </h3>
                        <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
                            The tech industry is evolving rapidly, and the connections you make in college will become your
                            professional network for life. Join communities that don't just teach you to code, but prepare you
                            to lead, innovate, and transform industries. Your journey to becoming a tech leader starts here.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="text-center">
                                <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                                <h4 className="text-lg font-semibold mb-2">Future-Proof Skills</h4>
                                <p className="text-gray-400 text-sm">Learn technologies that will remain relevant for decades</p>
                            </div>
                            <div className="text-center">
                                <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                                <h4 className="text-lg font-semibold mb-2">Global Network</h4>
                                <p className="text-gray-400 text-sm">Connect with alumni working at top tech companies worldwide</p>
                            </div>
                            <div className="text-center">
                                <Rocket className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                                <h4 className="text-lg font-semibold mb-2">Innovation Hub</h4>
                                <p className="text-gray-400 text-sm">Be part of the next breakthrough in technology</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-blue-800/20">
                            <p className="text-2xl text-blue-200 font-semibold mb-4">
                                🚀 Ready to join the most innovative tech community in your college?
                            </p>
                            <p className="text-gray-300">
                                Your future self will thank you for the decision you make today. Connect, collaborate, and create the extraordinary.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityPage;