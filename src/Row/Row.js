import "./Row.css"
import EggImage from "../images/image-egg.jpg"

const Row = () => {
    return (
        <div className="row">
            <div className="col-1">
                <h2 className="col-title">Transform Your Brand</h2>
                <p className="col-subtitle">We are a full service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <a className="col-link" href="www.google.com">Learn More</a>
            </div>
            <div className="col-2">
                <img src={EggImage} alt="egg"/>
            </div>
        </div>
    )
}

export default Row