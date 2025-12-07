export default function WhyChooseUs() {
  const features = [
    {
      icon: "👥",
      title: "Networking",
      desc: "Connect with talented peers from various domains and build valuable relationships.",
      glow: "hover:shadow-cyan-400/50 border-cyan-400/30 hover:-translate-y-2",
    },
    {
      icon: "⭐",
      title: "Skill Growth",
      desc: "Learn and improve your skills through real-world projects and teamwork.",
      glow: "hover:shadow-yellow-400/50 border-yellow-400/30 hover:-translate-y-2",
    },
    {
      icon: "📒",
      title: "Showcase Projects",
      desc: "Display your work, gain feedback, and inspire others with your creativity.",
      glow: "hover:shadow-pink-400/50 border-pink-400/30 hover:-translate-y-2",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6 text-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-pink-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-5xl text-center font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
        Why <span className="text-4xl md:text-5xl lg:text-5xl text-center font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">Choose Us?</span>
      </h2>

      {/* Subheading */}
      <p className="max-w-2xl mx-auto text-gray-300 mb-12 relative z-10">
        Be a part of a skill-driven community where students connect,
        collaborate, and grow together through knowledge sharing and project
        building.
      </p>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-black/80 backdrop-blur-md border rounded-2xl p-10 flex flex-col items-center text-center transition-transform duration-300 transform ${feature.glow}`}
          >
            <div className="mb-4 text-5xl">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}