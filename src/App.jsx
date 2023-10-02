import React from "react";
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import Explore from "./components/Explore";
import LiveAnyWhere from "./components/LiveAnyWhere";
import Advertise from "./components/Advertise";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-20">
        <Hero />
        <Aboutus />
        <Explore />
        <LiveAnyWhere />
        <Advertise />
        <Footer />
      </main>
    </>
  );
};

export default App;
