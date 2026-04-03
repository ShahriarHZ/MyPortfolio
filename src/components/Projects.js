import React from "react";
import devdirect from "../img/devdirect.png";
import petroasting from "../img/petroasting.png";
import fitnessfusion from "../img/fitnessfusion.png";
import sqlproject from "../img/sqlproject.png";
import codequiz from "../img/codequiz.png";
import JAT from "../img/JAT.jpg";
import memoji from "../img/memoji.png";
import linuxduck from "../img/linuxduck.jpeg";
import systemTroubleshootingImg from "../img/system-troubleshooting.jpg";

// --- PRIMARY DEVELOPMENT PROJECTS ---
const primaryProjects = [
    {
        source: "Portfolio",
        title: "Digitool-app",
        date: "2026",
        stack: "React, Vite, Tailwind CSS, DaisyUI",
        image: devdirect,
        points: [
            "Built a high-performance landing page focusing on a clean, minimalist UI and premium aesthetic.",
            "Implemented responsive pricing structures and modular component architecture.",
            "Optimized for fast loading and seamless navigation across all device sizes.",
        ],
        links: [
            { label: "GitHub", href: "https://github.com/ShahriarHZ/digitools-app" },
            { label: "Live", href: "https://digitools-by-shahriar.netlify.app" },
        ],
    },
    {
        source: "Portfolio",
        title: "Job Tracker",
        date: "2026",
        stack: "React.js, Node.js, TailwindCSS, DaisyUI",
        image: JAT,
        points: [
            "Developed during HackRU to streamline job application tracking and interview stages.",
            "Integrated goal-setting and streak tracking features to improve user consistency.",
            "Collaborated in a team environment to ship a functional MERN application under tight deadlines.",
        ],
        links: [
            { label: "GitHub", href: "https://github.com/ShahriarHZ/Job-Tracker" },
            { label: "Live", href: "https://shahriarhz.github.io/Job-Tracker/" },
        ],
    },
    {
        source: "Portfolio",
        title: "Student Management System",
        date: "2023",
        stack: "C++, File Handling, OOP",
        image: sqlproject,
        points: [
            "Developed a CLI application to manage student records, departments, and roles.",
            "Utilized C++ file handling for persistent data storage and retrieval.",
            "Designed a relational workflow for viewing and updating academic records.",
        ],
        links: [{ label: "GitHub", href: "https://github.com/ShahriarHZ/Project" }],
    },
    {
        source: "Portfolio",
        title: "English Janala",
        date: "2023",
        stack: "HTML, CSS, JavaScript",
        image: petroasting,
        points: [
            "Created an interactive educational platform for English language learning.",
            "Led the responsive design implementation and UI/UX styling.",
            "Implemented core JavaScript functionality for dynamic content rendering.",
        ],
        links: [
            { label: "GitHub", href: "https://github.com/ShahriarHZ/English_Janala" },
            { label: "Live", href: "https://shahriarhz.github.io/English_Janala/" },
        ],
    },
];

// --- SECONDARY PROJECTS & TECHNICAL LABS ---
const secondaryProjects = [
    {
        source: "Portfolio",
        title: "Calculator",
        date: "2024",
        stack: "HTML, CSS, JavaScript, jQuery, Tailwind",
        image: fitnessfusion,
        points: [
            "Developed a functional calculator app with a focus on logic and clean UI.",
            "Integrated core JavaScript features and jQuery for dynamic user interactions.",
            "Utilized Tailwind CSS to ensure a responsive and modern design.",
        ],
        links: [
            { label: "GitHub", href: "https://github.com/ShahriarHZ/Calculator" },
            { label: "Live", href: "https://shahriarhz.github.io/Calculator/" },
        ],
    },
    {
        source: "Portfolio",
        title: "Rock-Paper-Scissors",
        date: "2025",
        stack: "HTML, CSS, JavaScript",
        image: codequiz,
        points: [
            "Created an interactive browser-based game featuring score tracking via local storage.",
            "Focused on DOM manipulation and state management for game logic.",
            "Designed a user-friendly interface with CSS transitions and responsive layouts.",
        ],
        links: [
            { label: "GitHub", href: "https://github.com/ShahriarHZ/Rock-Paper-Scissors-Game-" },
            { label: "Live", href: "https://shahriarhz.github.io/Rock-Paper-Scissors-Game-/" },
        ],
    },
    {
        source: "Resume",
        title: "System Troubleshooting & Config Lab",
        date: "January 2026",
        stack: "Windows, Networking",
        image: systemTroubleshootingImg,
        points: [
            "Practiced diagnosing and resolving system and network-level bottlenecks.",
            "Configured system settings and driver compatibility for optimized performance.",
        ],
    },
    {
        source: "Resume",
        title: "Home Lab Environment",
        date: "February 2026",
        stack: "Linux, VMs, Networking",
        image: linuxduck,
        points: [
            "Set up virtual environments to practice Linux system administration and connectivity.",
            "Used networking tools to troubleshoot cross-platform system communication.",
        ],
    },
];

function Projects() {
    const allProjects = [...primaryProjects, ...secondaryProjects];

    return (
        <section id="projectSection" className="container mx-auto px-6 pb-10 md:px-10">
            <div className="section-heading section-heading-compact">
                <p className="section-kicker">Selected Work</p>
                <h1 id="projecth1" className="section-title text-4xl font-bold mb-4">Projects</h1>
                <p className="section-intro text-lg opacity-80 mb-8">
                    A showcase of full-stack applications, software engineering projects, and technical labs.
                </p>
            </div>
            
            <div className="project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProjects.map((project, index) => (
                    <article 
                        key={project.title} 
                        className="project-tile border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                        style={{ "--stagger": index % 6 }}
                    >
                        <div className="project-preview-box mb-4 overflow-hidden rounded">
                            {project.image ? (
                                <img 
                                    className="project-preview w-full h-48 object-cover" 
                                    src={project.image} 
                                    alt={`${project.title} preview`} 
                                />
                            ) : (
                                <div className="project-preview-placeholder w-full h-48 bg-gray-200 flex items-center justify-center">
                                    No image
                                </div>
                            )}
                        </div>
                        
                        <div className="project-header flex justify-between items-start mb-2">
                            <h2 className="project-title text-xl font-semibold">{project.title}</h2>
                            <p className="project-date text-sm text-gray-500">{project.date}</p>
                        </div>
                        
                        <p className="project-stack text-sm font-mono text-blue-600 mb-3">{project.stack}</p>
                        
                        <ul className="project-points list-disc list-inside text-sm space-y-1 mb-4 opacity-90">
                            {project.points.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                        
                        {project.links ? (
                            <div className="project-links flex gap-4 mt-auto">
                                {project.links.map((link) => (
                                    <a 
                                        key={link.href} 
                                        href={link.href} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="text-blue-500 hover:underline font-medium"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        ) : null}
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;