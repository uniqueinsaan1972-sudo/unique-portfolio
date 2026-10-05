import "./styles/Contact.css";

const IconArrowOutward = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px", display: "inline-block", verticalAlign: "middle" }}>
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const SOCIALS = [
  { name: "GitHub", href: "https://github.com/uniqueinsaan1972-sudo" },
  { name: "YouTube", href: "https://youtube.com/@unique_gamerz.24" },
  { name: "TikTok", href: "https://www.tiktok.com/@unique_gamerz.24" },
  { name: "LinkedIn", href: "https://www.linkedin.com/feed/update/urn:li:activity:7509851581216067584/" },
];

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:uniqueinsaan1972@gmail.com" data-cursor="disable" className="contact-social">
                uniqueinsaan1972@gmail.com
              </a>
            </p>
            <h4>WhatsApp</h4>
            <p>
              <a href="https://wa.me/923460499155?text=Hi%20Unique%2C%20I%20saw%20your%20portfolio." target="_blank" rel="noopener noreferrer" data-cursor="disable" className="contact-social">
                Chat on WhatsApp <IconArrowOutward />
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" data-cursor="disable" className="contact-social">
                {s.name} <IconArrowOutward />
              </a>
            ))}
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Unique Insaan</span>
            </h2>
            <h5>© 2026</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
