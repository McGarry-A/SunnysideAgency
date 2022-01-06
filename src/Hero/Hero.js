import "./Hero.css";
import HeroImage from "../images/image-hero.jpg";
import ArrowDown from "../icons/icon-arrow-down.svg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-image-container">
        <h1 className="hero-text">We Are Creatives</h1>
        <img className="hero-arrow-down" src={ArrowDown} alt="arrow-down" />
        <img className="hero-image" src={HeroImage} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
