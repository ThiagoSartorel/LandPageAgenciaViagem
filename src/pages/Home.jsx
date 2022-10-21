import React from "react";

import HeroHome from "../partials/HeroHome";
import About from "../partials/About";
import Services from "../partials/Services";
import Questions from "../partials/Questions";
import Contact from "../partials/Contact";
import Footer from "../partials/Footer";
import { FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Page content */}
      <main className="flex-grow">
        <a href="https://api.whatsapp.com/send/?phone=5549999999999" className="cursor-pointer bg-green-500 rounded-full w-16 h-16 animate-bounce fixed z-10 right-4 bottom-4" >
          <svg className="text-[40px] p-3 text-white ">
            <FaWhatsapp />
          </svg>
        </a>
        {/*  Page sections */}
      
        <HeroHome />
        <About />
        <Questions />
        <Services />
        <Contact />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}


export default Home;
