import "./Testimonials.css";
import { testimonialsArr } from "../data";
import Testimonial from "../Testimonial/Testimonial";

const Testimonials = () => {
  return (
    <div>
      <h3 className="testimonials-header">Client Testimonials</h3>
      <div className="testimonials-main">
        {testimonialsArr.map((el, index) => {
          return (
            <Testimonial
              image={el.image}
              quote={el.quote}
              author={el.author}
              role={el.role}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
