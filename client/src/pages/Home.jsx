import React from "react";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeCircles from "../components/HomeCircles";
import Map from "./Map";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <img
        style={{ width: "100%", display: "block" }}
        className="my-16"
        src="https://i.ibb.co/PFqrVX4/doctor-writing-on-clipboard-scene-stock-animation-97071-854x480.gif"
        alt=""
      />
      <AboutUs />
      <HomeCircles />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
