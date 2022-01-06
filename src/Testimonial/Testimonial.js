import "./Testimonial.css"

const Testimonial = ({ image, quote, author, role }) => {
  return (
    <div className="testimonial-body">
      <img src={image} alt="avatar" className="avatar-image" />
      <blockquote>{quote}</blockquote>
      <cite>{author}</cite>
      <p>{role}</p>
    </div>
  );
};

export default Testimonial;
