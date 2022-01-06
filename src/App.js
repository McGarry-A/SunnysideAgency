import "./App.css";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar.js";
import Row from "./Row/Row.js";
import DualImages from "./DualImages/DualImages.js"
import { data } from "./data";
import Testimonials from "./Testimonials/Testimonials.js"
import ImageRow from "./ImageRow/ImageRow.js"
import Footer from "./Footer/Footer";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      {data.map((el, index) => {
        return <Row title={el.title} text={el.text} image={el.image} reverse={el.reverse} key={index}/>
      })}
      <DualImages />
      <Testimonials />
      <ImageRow />
      <Footer />
    </div>
  );
}

export default App;
