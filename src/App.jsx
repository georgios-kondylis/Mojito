import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Navbar, Hero, Cocktails, About } from "./components/exports";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </>
  );
};

export default App;
