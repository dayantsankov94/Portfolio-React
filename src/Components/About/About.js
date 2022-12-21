import { useState } from "react";
import Fishing from "./Activities/Fishing";
import Volleball from "./Activities/Volleyball";
import Snowboarding from "./Activities/Snowboarding";
import HiddenInfo from "./HiddenInfo";
import { Link } from "react-router-dom";

const About = () => {

    const [activity, SetActivity] = useState('');

    const [hidden, SetHidden] = useState(true);


    const infoHanler = () => {
        SetHidden(!hidden)
        SetActivity('');
    }

    const clickHandler = (e, value) => {
        SetActivity(value);
    }

    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="about-img col-md">
                        <div className="image-container">
                            <img src="assets/images/IMG_3569.jpg" alt="me" />
                        </div>
                    </div>
                    <div className="about-text col-md">
                        <h2>About Me</h2>
                        <h5>Web Developer</h5>
                        <p>
                            I am a beginner front-end web developer. I have no professional
                            experience in this field yet but i've took some JavaScript
                            courses recently. More about my education you can find <Link to="/education"> here</Link> . I have few projects of my own that
                            you can check
                            <Link to="/projects"> here</Link> . My main programming language is JavaScript and i
                            build SPA with ReactJS. I have knowledge of NodeJS so i can build REST
                            API's as well and i use Bootstrap for the design.
                        </p>
                        <button onClick={infoHanler} className="btn">Learn more about me</button>
                        <div className="hidden-info">
                            {hidden == false &&
                                <HiddenInfo clickHandler={clickHandler} />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div>

                {hidden == false &&
                    <div className="hidden-images container">
                        {activity == 'volleyball' &&
                            <Volleball />
                        }
                        {activity == 'fishing' &&
                            <Fishing />
                        }
                        {activity == 'snowboarding' &&
                            <Snowboarding />
                        }
                    </div>
                }
            </div>
        </section>

    )
}

export default About;