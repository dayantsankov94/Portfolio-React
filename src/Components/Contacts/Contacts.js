const Contacts = () => {
    return (
        <section className="contacts">
            <div className="contacts">
                <h1>Contacts</h1>
                <h2>Personal Contacts</h2>
                <span>Email: </span>
                <p>daqntsankov@gmail.com</p>
                <span>Mobile: </span>
                <p>+359 8890 188 53</p>
                <h2>Social Media</h2>
                <p>
                    <span className="fa fa-2x fa-github m-2" />
                    <a href="https://github.com/dayantsankov94" target="_blank">
                        Dayan Tsankov
                    </a>
                </p>
                <p>
                    <span className="fa fa-2x fa-facebook m-2"> </span>
                    <a href="https://www.facebook.com/daqn.tsankov" target="_blank">
                        Dayan Tsankov
                    </a>
                </p>
                <p>
                    <span className="fa fa-2x fa-instagram m-2" /> 
                    <a href="https://www.instagram.com/dcankov/" target="_blank">
                        @dcankov
                    </a>
                </p>
                <p>
                    <span className="fa fa-2x fa-linkedin m-2" />
                    <a
                        href="https://www.linkedin.com/in/dayan-tsankov-794299257/"
                        target="_blank"
                    >
                        {" "}
                        Dayan Tsankov
                    </a>
                </p>
            </div>
        </section>
    )
}

export default Contacts;