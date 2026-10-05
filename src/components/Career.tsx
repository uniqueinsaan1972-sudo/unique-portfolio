import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Journey</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Science Student</h4>
                <h5>Learning &amp; Growing</h5>
              </div>
              <h3>START</h3>
            </div>
            <p>
              Studying computer science and learning programming, design and video editing, one skill at a time.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Gaming Content Creator</h4>
                <h5>@unique_gamerz.24</h5>
              </div>
              <h3>CREATOR</h3>
            </div>
            <p>
              Creating Free Fire gameplay and livestreams on YouTube and TikTok, and learning editing and audience building along the way.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Next.js &amp; Firebase</h5>
              </div>
              <h3>BUILDER</h3>
            </div>
            <p>
              Building real websites like MJ Sports and GetUniqueVault with modern stacks, responsive design and Vercel deployment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelancer &amp; Creator</h4>
                <h5>Unique Insaan</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Taking on web, design and editing work while growing toward independent, halal income.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
