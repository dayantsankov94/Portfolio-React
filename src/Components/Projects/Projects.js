const Projects = () => {
    return (
        <section className="section">
            <div className="container projects">
                <h1 className="title">My Projects</h1>
                <div className="row m-5">
                    <div className="col-lg-4 col-md-6 ">
                        <figure className="project-image">
                            <img src="assets/images/Capture.PNG" alt="" />
                            <figcaption>
                                <p>
                                    This is a website for fishermen who want to share their experience
                                    with others.
                                </p>
                                <a
                                    target="_blank"
                                    href='https://fishing-journal-214c0.web.app/'
                                >
                                    Visit Website
                                </a>
                            </figcaption>
                            <h3 className="p-4">Fishing Journal</h3>
                        </figure>
                    </div>
                    {/* <div className="col-lg-4 col-md-6 m-5 justify-content-end">
                        <h3> Unfortunately at the moment the website is under maintenance!</h3>
                    </div> */}
                </div>
            </div>
        </section>

    )
}

export default Projects;