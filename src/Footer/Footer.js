import Facebook from "../icons/icon-facebook.svg";
import Instagram from "../icons/icon-instagram.svg";
import Twitter from "../icons/icon-twitter.svg";
import Pintrest from "../icons/icon-pinterest.svg";
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">sunnyside</div>
      <div className="footer-links">
        <ul className="footer-links-list">
          <li className="footer-link-item">About</li>
          <li className="footer-link-item">Services</li>
          <li className="footer-link-item">Projects</li>
        </ul>
      </div>
      <div className="footer-socails">
        <ul className="footer-socials-list">
          <li className="footer-social-link">
            <img src={Facebook} alt="socials" />
          </li>
          <li className="footer-social-link">
            <img src={Instagram} alt="socials" />
          </li>
          <li className="footer-social-link">
            <img src={Twitter} alt="socials" />
          </li>
          <li className="footer-social-link">
            <img src={Pintrest} alt="socials" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
