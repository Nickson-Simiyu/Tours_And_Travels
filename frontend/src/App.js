import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Destinations from "./components/Destinations/Destinations";
import Search from "./components/Search/Search";
import Selects from "./components/Selects/Selects";
import ImgCarousel from "./components/carousel/ImgCarousel";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;
