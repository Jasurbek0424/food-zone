// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import AppStore from "./components/AppStore/AppStore";
import Testimonial from './components/Testimonial/Testimonial';
import Footer from "./Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
// rsc

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="bg-white dark:bg-gray-950">
        <Navbar />
        <Hero />
        <Services />
        <Banner />
        <AppStore />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default App;