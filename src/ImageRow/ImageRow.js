import "./ImageRow.css"

import { images } from "../data";

const ImageRow = () => {
  return (
      <div className="image-row">
          {images.map((el, index) => {
              return <img src={el} key={index} className="image-item" alt="row"/>
          })}
        </div>
  )
};

export default ImageRow;
