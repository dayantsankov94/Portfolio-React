import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer ">
            <div className="container">
                <footer className="d-flex flex-wrap py-2">
                    <div className="col-12 col-md-4 justify-content-center justify-content-lg-start d-flex my-1 my-lg-0">
                        <a
                            href="/"
                            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
                        ></a>
                        <span className="mb-3 mb-md-0">© 2022 Personal Website</span>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center justify-content-lg-center my-1 my-lg-0">
                        <div className="logo">
                            <a href="/">
                                <img src="assets/images/logo.png" alt="Logo" />
                            </a>
                        </div>
                    </div>
                    <div className=" col-12 col-md-4 justify-content-center justify-content-lg-end d-flex my-1 my-lg-0">
                        <ul className='nav'>
                            <li>
                                <a href="https://www.facebook.com/daqn.tsankov" target="_blank">
                                    <span className="fa fa-2x fa-facebook m-2" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/dayantsankov94" target="_blank">
                                    <span className="fa fa-2x fa-github m-2" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/dcankov/" target="_blank">
                                    <span className="fa fa-2x fa-instagram m-2" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/dayan-tsankov-794299257/"
                                    target="_blank"
                                >
                                    <span className="fa fa-2x fa-linkedin m-2" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>

    )
}

export default Footer;