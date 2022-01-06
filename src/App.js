import "./App.css";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar.js";
import Row from "./Row/Row.js";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Row />
    </div>
  );
}

export default App;
