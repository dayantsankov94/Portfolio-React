const HiddenInfo = ({
    clickHandler
}) => {

    return (
        <div className="hidden-text">
            <p>
                I am 28 years old and i was born in Troyan, Bulgaria (a smalll
                beautiful town in the countryside). I am currently living in
                Sofia. I love travelling and I have many hobbies and interests but
                what i like and love the most are Volleyball, Fishing and
                Snowboarding
            </p>
            <p className="m-5">
                You can see photograhps of me participating in those activities
                below:
            </p>
            <button onClick={e => clickHandler(e,'volleyball')} className="btn">Volleball</button>
            <button onClick={e => clickHandler(e,'fishing')} className="btn">Fishing</button>
            <button onClick={e => clickHandler(e,'snowboarding')} className="btn">Snowboarding</button>
        </div>
    )
}

export default HiddenInfo;