// Importing React 
import React from "react";
// Importing the new logo (ensure you saved the new image as sz-logo.png)
import logo from "../img/sz-logo.png"; 

import Resume from "../pdf/ResumeSoftwareDev.pdf";

// Creating header function
function AboutHeader() {
    return (
        <>
        <section id="header" className="p-4">
            <div className="flex justify-between items-center">
                {/* Logo Image and Text */}
                <a href="/">
                    {/* Updated alt text to SZ Logo and fixed the width class */}
                    <img id='headerlogo' src={logo} alt="SZ Logo" className="w-12 h-auto" />
                </a>
                
                {/* Nav Items */}
                <ul id='navLink' className="flex items-center space-x-6">
                    <li className="nav-link nav-link-ltr">
                        <a href='/'>Home</a>
                    </li>
                    <li className="nav-link nav-link-ltr">
                        <a href={Resume} target="_blank" rel="noreferrer">Resume</a>
                    </li>
                </ul>
            </div>
        </section>
        </>
    );
}

// Exporting the header
export default AboutHeader;