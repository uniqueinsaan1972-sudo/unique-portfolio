import { useEffect, useRef } from "react";
import "./styles/Landing.css";

const Landing = () => {
  const photoRef = useRef<HTMLDivElement>(null);

  // Soft parallax tilt on desktop (mouse only, no cost on touch devices)
  useEffect(() => {
    const el = photoRef.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      el.style.setProperty("--tx", `${x * 14}px`);
      el.style.setProperty("--ty", `${y * 10}px`);
      el.style.setProperty("--rx", `${-y * 5}deg`);
      el.style.setProperty("--ry", `${x * 6}deg`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="landing-intro">
          <h2>Hello! I'm</h2>
          <h1>
            UNIQUE
            <br />
            <span>INSAAN</span>
          </h1>
          <p className="landing-subtext">
            Web Developer &amp; Content Creator
          </p>
          <div className="role-pills">
            <div className="role-pill">
              <span className="role-icon">🌐</span> Web Development
            </div>
            <div className="role-pill">
              <span className="role-icon">🎬</span> Video &amp; Graphics
            </div>
            <div className="role-pill">
              <span className="role-icon">🎮</span> Gaming &amp; Live
            </div>
          </div>
        </div>

        <div className="hero-photo" ref={photoRef}>
          <div className="hero-glow"></div>
          <div className="hero-ring"></div>
          <div className="hero-frame">
            <img
              src="/images/hero.webp"
              alt="Unique Insaan"
              width={900}
              height={900}
              fetchPriority="high"
              draggable={false}
            />
          </div>
          <div className="hero-chip hero-chip-1">⚡ Fast &amp; Modern Sites</div>
          <div className="hero-chip hero-chip-2">🎨 Clean UI / UX</div>
          <div className="hero-chip hero-chip-3">✨ Smooth Motion</div>
        </div>

        <a href="#about" className="hero-scroll" data-cursor="disable">
          <span>Scroll</span>
          <i></i>
        </a>
      </div>
    </div>
  );
};

export default Landing;
