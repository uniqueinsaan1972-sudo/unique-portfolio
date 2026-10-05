import { lazy, Suspense, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import LazyMount from "./LazyMount";
import setSplitText from "./utils/splitText";
import { setAllTimeline } from "./utils/GsapScroll";

gsap.registerPlugin(ScrollTrigger);

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = () => {
  useEffect(() => {
    setSplitText();
    const resizeHandler = () => setSplitText();
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  useEffect(() => {
    // Scroll animations that used to start after the 3D model loaded
    setAllTimeline();
    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.id !== "work") st.kill();
      });
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing />
            <About />
            <WhatIDo />
            <Career />
            <Work />
            <LazyMount>
              <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
                <TechStack />
              </Suspense>
            </LazyMount>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
