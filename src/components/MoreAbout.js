import React from "react";

import selfPortrait from "../img/landing-headshot.jpeg";

const aboutSections = [
    {
        title: "Current Season",
        content:
            "As a Computer Science and Engineering student, I am currently in an exciting phase of growth. I am deeply immersed in the world of full-stack development, refining my skills in React, Node.js, and modern databases. My days are spent balancing academic lab work with building real-world projects like job trackers and management systems. My goal is to bridge the gap between complex logic and clean UI, eventually moving into high-impact software engineering roles where I can solve problems at scale.",
    },
    {
        title: "Outside The Screen",
        content:
            "When I am not coding or debugging, you can usually find me on the football pitch. Whether I am playing a match or discussing tactics, football is my primary way to stay active and energized. Beyond sports, food plays a central role in my life and culture—it’s more than just a meal; it is a way to celebrate milestones and bring friends and family together. I also enjoy the strategic side of gaming, particularly challenges that require the same quick thinking I use in competitive programming.",
    },
    {
        title: "My Faith Journey",
        content:
            "Faith is the foundation of my life and the compass that guides my decisions. As a Muslim, I find immense peace in knowing that my efforts are matched by a greater plan. This belief keeps me grounded during the stressful seasons of exams and project deadlines, allowing me to approach challenges with patience and gratitude. I strive to keep my values at the center of my professional and personal life, trusting that as long as I work hard and stay sincere, I will be guided toward the right opportunities.",
    },
];

const quickFacts = [
    "Proud Muslim and tech enthusiast",
    "Football lover—always up for a match or a tactical debate",
    "Competitive programmer at heart (C++ & Problem Solving)",
    "Passionate about building the modern web with React & Node.js",
    "Foodie who loves exploring new flavors and local cuisines",
];
function MoreAbout() {
    return (
        <section id="moreAboutPage" className="px-6 py-10 md:px-10">
            <div className="moreabout-shell mx-auto max-w-screen-xl">
                <div className="moreabout-hero">
                    <div className="moreabout-profile-card">
                        <img className="moreabout-portrait" src={selfPortrait} alt="James Sciacca portrait" />
                        <div className="moreabout-header-copy">
                            <p className="moreabout-kicker">Background</p>
                            <h1 className="moreabout-title">More About Me</h1>
                            <p className="moreabout-summary">
                                A more personal side of the portfolio, with room to show personality, milestones, and memories.
                            </p>
                        </div>
                    </div>

                    <aside className="moreabout-quickfacts" style={{ "--stagger": 1 }}>
                        <p className="moreabout-panel-label">Quick Snapshot</p>
                        <div className="moreabout-fact-list">
                            {quickFacts.map((fact) => (
                                <span key={fact} className="moreabout-fact-pill">
                                    {fact}
                                </span>
                            ))}
                        </div>
                    </aside>
                </div>

                <div className="moreabout-grid">
                    {aboutSections.map((section, index) => (
                        <article key={section.title} className="moreabout-card" style={{ "--stagger": index }}>
                            <h3>{section.title}</h3>
                            <p>{section.content}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MoreAbout;
