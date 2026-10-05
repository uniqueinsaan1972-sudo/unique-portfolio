import {
  FaGithub,
  FaYoutube,
  FaTiktok,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    if (!social) return;

    const cleanups: (() => void)[] = [];

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      if (!link) return;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;
      let animId: number;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        animId = requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      elem.addEventListener("mousemove", onMouseMove);
      updatePosition();

      cleanups.push(() => {
        cancelAnimationFrame(animId);
        elem.removeEventListener("mousemove", onMouseMove);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/uniqueinsaan1972-sudo" target="_blank" rel="noopener noreferrer" aria-label="FaGithub">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://youtube.com/@unique_gamerz.24" target="_blank" rel="noopener noreferrer" aria-label="FaYoutube">
            <FaYoutube />
          </a>
        </span>
        <span>
          <a href="https://www.tiktok.com/@unique_gamerz.24" target="_blank" rel="noopener noreferrer" aria-label="FaTiktok">
            <FaTiktok />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7509851581216067584/" target="_blank" rel="noopener noreferrer" aria-label="FaLinkedinIn">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="mailto:uniqueinsaan1972@gmail.com" aria-label="FaEnvelope">
            <FaEnvelope />
          </a>
        </span>
      </div>
      <a className="resume-button" href="mailto:uniqueinsaan1972@gmail.com?subject=Project%20inquiry">
        <HoverLinks text="HIRE ME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
