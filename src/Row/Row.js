import "./Row.css";

const Row = ({ title, text, image, reverse }) => {
  return (
    <div className="row">
      <div className="col-1" style={{ order: reverse ? 2 : null }}>
        <div className="col-text">
          <h2 className="col-title">{title}</h2>
          <p className="col-subtitle">
            {text}
          </p>
          <a className="col-link" href="www.google.com">
            Learn More
          </a>
        </div>
      </div>
      <div className="col-2" style={{ order: reverse ? 1 : null }}>
        <img className="col-image" src={image} alt="egg" />
      </div>
    </div>
  );
};

export default Row;
