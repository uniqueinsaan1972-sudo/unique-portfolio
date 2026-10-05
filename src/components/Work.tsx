import { useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  { name: "MJ Sports", category: "Sports Store Website (In Development)", tools: "Next.js, React, Responsive UI, Vercel", img: "/images/work-mjsports.svg", link: "" },
  { name: "GetUniqueVault", category: "Digital Assets Platform", tools: "Next.js, Firebase, Authentication, Vercel", img: "/images/work-vault.svg", link: "" },
  { name: "Unique Gamerz", category: "Free Fire Gaming Channel", tools: "YouTube, TikTok, Livestreaming, Video Editing", img: "/images/work-gamerz.svg", link: "https://youtube.com/@unique_gamerz.24" },
];

const Work = () => {
  useEffect(() => {
    // Pinned horizontal scroll only on desktop. On phones/tablets the cards
    // scroll sideways natively (swipe + snap), which is smoother and reliable.
    const mm = gsap.matchMedia();
    mm.add("(min-width: 901px)", () => {
      const getTranslateX = () => {
        const flex = document.querySelector(".work-flex") as HTMLElement;
        const container = document.querySelector(".work-container") as HTMLElement;
        if (!flex || !container) return 0;
        return Math.max(0, flex.scrollWidth - container.clientWidth + 40);
      };

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: () => `+=${getTranslateX()}`,
          scrub: 1,
          pin: true,
          id: "work",
          invalidateOnRefresh: true,
        },
      });
      timeline.to(".work-flex", { x: () => -getTranslateX(), ease: "none" });

      const timer = setTimeout(() => ScrollTrigger.refresh(), 500);
      return () => {
        clearTimeout(timer);
        timeline.kill();
      };
    });
    return () => mm.revert();
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {PROJECTS.map((proj, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{proj.name}</h4>
                    <p>{proj.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{proj.tools}</p>
              </div>
              <WorkImage image={proj.img} alt={proj.name} link={proj.link || undefined} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
