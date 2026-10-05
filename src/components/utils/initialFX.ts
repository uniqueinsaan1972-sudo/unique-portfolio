import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  if (smoother && typeof smoother.paused === "function") {
    smoother.paused(false);
  }
  const main = document.getElementsByTagName("main")[0];
  if (main) main.classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  gsap.fromTo(
    [".landing-intro h2", ".landing-intro h1", ".landing-subtext", ".role-pill"],
    { opacity: 0, y: 50, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.15,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".hero-photo",
    { opacity: 0, scale: 0.85, y: 40 },
    { opacity: 1, scale: 1, y: 0, duration: 1.4, ease: "power3.out", delay: 0.4 }
  );
  gsap.fromTo(
    ".hero-chip",
    { opacity: 0, scale: 0.6 },
    { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)", stagger: 0.2, delay: 1.1 }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );
}
