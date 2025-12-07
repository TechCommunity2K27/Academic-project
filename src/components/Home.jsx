import React from 'react'
import  Navbar  from './Navbar'
import  HeroSection  from './HeroSection';
import About_us from '../pages/About_us';
import CommunityPage from '../pages/Community';
import Footer  from '../pages/Footer';
import MeetOurTeam from '../pages/meet_our_team';

const Home = () => {
  return (
    <div>
      <Navbar />  
      <HeroSection />
      <About_us />
      <CommunityPage />
      <MeetOurTeam />
      <Footer />
    </div>
  )
}

export default Home