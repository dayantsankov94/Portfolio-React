import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer ">
            <div className="container">
                <footer className="d-flex flex-wrap py-2">
                    <div className="col-12 col-lg-4 col-md-6 col-sm-12 d-flex">
                        <a
                            href="/"
                            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
                        ></a>
                        <span className="mb-3 mb-md-0">© 2022 Personal Website</span>
                    </div>
                    <div className="col-12 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                        <div className="logo">
                            <a href="/">
                                <img src="assets/images/logo.png" alt="Logo" />
                            </a>
                        </div>
                    </div>
                    <ul className="nav col-12 col-lg-4 col-md-6 col-sm-12 justify-content-end d-flex">
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
                </footer>
            </div>
        </div>

    )
}

export default Footer;