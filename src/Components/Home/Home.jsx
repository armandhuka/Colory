import React from 'react';
import Header from './Header';
import Banner from './Banner';
import About from './About'; // Import the About component
import Guide from './Guide';
import Footer from './Footer';
const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About /> 
      <Guide/>
      <Footer/>
    </div>
  );
};

export default Home;