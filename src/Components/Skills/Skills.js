const Skills = () => {
    return (
        <section className="skills">
            <div className="skills">
                <div className="skills">
                    <h1>Programming Skills</h1>
                    <div className="row">
                        <div className="skills-images">
                            <img
                                src="assets/images/Unofficial_JavaScript_logo_2.svg.png"
                                alt=""
                            />
                            <img src="assets/images/react logo.png" alt="" />
                            <img src="assets/images/node logo.png" alt="" />
                            <img src="assets/images/express-logo.png" alt="" />
                            <img src="assets/images/MongoDB-Logo.jpg" alt="" />
                            <img src="assets/images/css3-html5-logo-initial.png" alt="" />
                            <img src="assets/images/css logo.png" alt="" />
                            <img src="assets/images/bootstrap.jfif" alt="" />
                            <img src="assets/images/mongoose.png" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="skills-charts col-md">
                            <div className="front-end">
                                <h4>Front-end</h4>
                                <div className="chart">
                                    <span>JavaScript</span>
                                    <footer>
                                        <div data-width="70%" style={{ width: "50%" }} />
                                    </footer>
                                </div>
                                <div className="chart">
                                    <span>ReactJs</span>
                                    <footer>
                                        <div data-width="60%" style={{ width: "40%" }} />
                                    </footer>
                                </div>
                                <div className="chart">
                                    <span>HTML</span>
                                    <footer>
                                        <div data-width="65%" style={{ width: "40%" }} />
                                    </footer>
                                </div>
                                <div className="chart">
                                    <span>CSS</span>
                                    <footer>
                                        <div data-width="50%" style={{ width: "40%" }} />
                                    </footer>
                                </div>
                                <div className="chart">
                                    <span>Bootstrap</span>
                                    <footer>
                                        <div data-width="50%" style={{ width: "30%" }} />
                                    </footer>
                                </div>
                            </div>
                            <div className="back-end">
                                <h4>Back-end</h4>
                                <div className="chart">
                                    <span>NodeJS</span>
                                    <footer>
                                        <div data-width="50%" style={{ width: "30%" }} />
                                    </footer>
                                </div>
                                <div className="chart">
                                    <span>ExpressJS</span>
                                    <footer>
                                        <div data-width="40%" style={{ width: "30%" }} />
                                    </footer>
                                </div>
                                <div className="chart">
                                    <span>MongoDB</span>
                                    <footer>
                                        <div data-width="35%" style={{ width: "25%" }} />
                                    </footer>
                                </div>
                                <div className="chart">
                                    <span>Mongoose</span>
                                    <footer>
                                        <div data-width="35%" style={{ width: "25%" }} />
                                    </footer>
                                </div>
                            </div>
                        </div>
                        <div className="skills-image col-md">
                            <img src="assets/images/Web-Developer-skill.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Skills;