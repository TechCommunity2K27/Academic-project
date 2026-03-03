import React from 'react'
import  Navbar  from './Navbar'
import  HeroSection  from './HeroSection';
import About_us from '../pages/About_us';
import CommunityPage from '../pages/Community';
import Footer  from '../pages/Footer';
import MeetOurTeam from '../pages/meet_our_team';

const Home = () => {
  return (
 <div className="scroll-smooth">
      <Navbar />  

      {/* Home Section */}
      <section id="Home">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="About">
        <About_us />
      </section>

      {/* Community Section */}
      <section id="Community">
        <CommunityPage />
      </section>

      {/* Team Section */}
      <section id="Team">
        <MeetOurTeam />
      </section>

      <Footer />
    </div>
  )
}

export default Home