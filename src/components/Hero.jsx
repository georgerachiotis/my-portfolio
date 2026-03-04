import profilePic from "../assets/profilepic.jpg";

export default function Hero() {
    return (
        <header className="hero reveal">
            <img className="avatar" src={profilePic} alt="Georgios Rachiotis" />

            <div className="heroText">
                <p className="eyebrow">Junior Web Developer</p>
                <h1>Georgios Rachiotis</h1>
                <p className="lead">
                I build clean, modern React apps and enjoy working across the stack with Node.js.
                </p>

                <div className="btnRow">
                <a 
                    className="btn btnPrimary"
                    href={`${import.meta.env.BASE_URL}cv.pdf`}
                    target="_blank"
                    rel="noreferrer"
                >
                    Download CV
                </a>
                </div>
            </div>
        </header>
    );
}