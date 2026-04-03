//importing react
import React from "react";
import { Link } from "react-router-dom";

//importing landing image
import memoji from "../img/memoji.png";
import githublogo from "../img/github-mark.png";
import linkedinlogo from "../img/linkedin.png";

//creating landing function
function Landing({ isMobile = false }) {
    const introText = isMobile ? "Welcome to my corner of the web! I am a Full-Stack Developer dedicated to building clean, responsive, and user-centric applications. My background in Computer Science fuels my passion for solving complex architectural puzzles and optimizing how data flows behind the scenes. Whether it’s crafting a seamless frontend experience or scaling a robust backend, I love figuring out the 'why' and 'how' of every project. I am always open to new challenges—lets connect and build something impactful" : "This is the desktop version text";

    return(
        <>
        <section id="landing">
            <div className="landing-shell max-w-screen-xl p-8 md:p-10 mx-auto">
                <div className="landing-copy">
                    <h5 id='intro' className="font-mono text-lg">Hello, my name is</h5>
                    <h1 id='name' className="font-mono">Md Shahriar Hossain Zisan</h1>
                    <p id='bio' className="font-mono mb-2">{introText}</p>
                </div>
                <div className={`landing-visual ${isMobile ? "landing-visual-hidden" : ""}`}>
                    <img id='memoji' src={memoji} alt="Memoji profile" />
                </div>
                <ul id='socials' className="flex items-center mt-5">
                    <li className="landing-cta-item"><a href="#contactForm" id='contactBtn' className="landing-cta-btn text-white font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-2 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out">Contact Me</a></li>
                    <li className="landing-cta-item"><Link to="/resume" id='contactBtn' className="landing-cta-btn text-white font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-2 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out">View Resume</Link></li>
                    <li id='socialLinks'><a href="https://github.com/ShahriarHZ" target="_blank" rel="noreferrer"><img src={githublogo} alt="GitHub" /></a></li>
                    <li id='socialLinks'><a href="https://www.linkedin.com/in/shahriarhossain-zisan/" target="_blank" rel="noreferrer"><img src={linkedinlogo} alt="LinkedIn" /></a></li>
                </ul>
            </div>
        </section>
        </>
    );
}

export default Landing;
