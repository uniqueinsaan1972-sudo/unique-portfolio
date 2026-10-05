import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box what-box-left">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>

        {/* 3D Animated Portrait Card */}
        <div className="portrait-3d-wrapper" data-cursor="disable">
          <div className="portrait-glow-ring"></div>
          <div className="portrait-card">
            <div className="portrait-image-wrap">
              <img
                src="/images/hero-alt.webp"
                alt="Unique Insaan"
                className="portrait-img"
              />
              <div className="portrait-badge">
                <span className="badge-dot"></span> AVAILABLE FOR FREELANCE
              </div>
            </div>
            <div className="portrait-info">
              <h3>Unique Insaan</h3>
              <p>Web Developer & Content Creator | @unique_gamerz.24</p>
            </div>
          </div>
        </div>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>WEB DEV</h3>
              <h4>Description</h4>
              <p>
                Building clean, fast and responsive websites that look great on mobile and desktop. I work with Next.js and React, use Firebase for data and login, and deploy on Vercel.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">HTML5</div>
                <div className="what-tags">CSS3</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">React</div>
                <div className="what-tags">Next.js</div>
                <div className="what-tags">Firebase</div>
                <div className="what-tags">Vercel</div>
                <div className="what-tags">Python (Basics)</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>GRAPHIC DESIGN</h3>
              <h4>Description</h4>
              <p>
                Eye-catching visuals that get noticed: thumbnails, logos, posters and social media posts with a clean, consistent look for your brand or channel.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Thumbnails</div>
                <div className="what-tags">Logos</div>
                <div className="what-tags">Posters</div>
                <div className="what-tags">Social Posts</div>
                <div className="what-tags">Branding</div>
                <div className="what-tags">Layout</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>VIDEO EDITING</h3>
              <h4>Description</h4>
              <p>
                Punchy edits for YouTube videos, reels and gaming montages: smooth cuts, transitions, sound sync and colour touch-ups that keep viewers watching.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">YouTube Videos</div>
                <div className="what-tags">Reels & Shorts</div>
                <div className="what-tags">Gaming Montages</div>
                <div className="what-tags">Transitions</div>
                <div className="what-tags">Sound Sync</div>
                <div className="what-tags">Colour Touch-up</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 3)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>GAMING & LIVE</h3>
              <h4>Description</h4>
              <p>
                Free Fire gameplay content and livestreaming on YouTube and TikTok. This is where I learned audience building, editing and consistency.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Free Fire</div>
                <div className="what-tags">Livestreaming</div>
                <div className="what-tags">YouTube</div>
                <div className="what-tags">TikTok</div>
                <div className="what-tags">Community</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
