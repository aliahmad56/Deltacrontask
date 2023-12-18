import React from 'react';
import '../assets/styles/global.css';
import Header from '../components/Common/header';
import Footer from '../components/Common/footer';
import starwar from '../assets/images/heroimg.jpeg';

function Home() {
  return (
    <div>
      <Header />
      <img className="hero-image" src={starwar} alt=""></img>
      <Footer />
    </div>

  );
}

export default Home;