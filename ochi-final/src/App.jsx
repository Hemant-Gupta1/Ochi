import React from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Featured from "./Components/Featured";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Loader from "./Components/Loader"
import Hero from "./Components/HeroShape"
import MovingText from "./Components/MovingText"

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full bg-[#f1f1f1] h-screen text-black">
      <Loader />
      <Hero />
      <Navbar />
      
      <LandingPage />
      
      <Marquee />
      <About />
      <Eyes />
      <MovingText />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;