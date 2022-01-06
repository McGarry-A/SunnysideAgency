import "./DualImages.css";
import colOneImage from "../images/image-cherries.jpg";
import colTwoImage from "../images/image-orange.jpg";
const DualImages = () => {
  return (
    <div className="ci">
      <div className="ci-col">
        <img src={colOneImage} alt="cherries" className="ci-image" />
        <div className="ci-col-text" style={{left: "12.5%"}}>
          <h3 className="ci-col-title">Graphic Design</h3>
          <p className="ci-col-subtext">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
        </div>
      </div>
      <div className="ci-col">
        <img src={colTwoImage} alt="orange" className="ci-image"/>
        <div className="ci-col-text" style={{right: "12.5%"}}>
          <h3 className="ci-col-title">Photography</h3>
          <p className="ci-col-subtext">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
      </div>
    </div>
  );
};

export default DualImages;
