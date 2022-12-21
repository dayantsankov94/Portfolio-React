import { Link } from "react-router-dom";
import Cv from '../../Portfolio/cv.pdf'
const Home = () => {
    return (
        <div className="bg">
            <div className="content container ms-3">
                <h4>Hello, my name is</h4>
                <h1>Dayan Tsankov</h1>
                <h3>I am a JavaScript Enthusiast</h3>
                <Link
                    className="btn"
                    target="_blank"
                    to={Cv}
                >
                    Portfolio
                </Link>
            </div>
        </div>
    )
}

export default Home;