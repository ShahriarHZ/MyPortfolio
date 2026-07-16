import React from "react";
import resume from '../pdf/Shahriar_Hossain_Zisan Fullstack Developer Resume (3).pdf';

function ResumePage() {
    return (
        <section id="resumePage" className="px-6 py-10 md:px-10">
            <div className="resume-shell mx-auto max-w-screen-xl">
                <div className="resume-heading">
                    <p className="resume-kicker">Resume</p>
                    <h1 className="resume-title">Shahriar Zisan's Resume</h1>
                    <p className="resume-intro">
                        View my latest resume directly on the site or download a copy.
                    </p>
                </div>

                <div className="resume-actions">
                    <a
                        className="resume-download"
                        href={resume}
                        download="Shahriar_Hossain_Zisan Fullstack Developer Resume (3).pdf"
                    >
                        Download PDF
                    </a>
                    <a
                        className="resume-open"
                        href={resume}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Open In New Tab
                    </a>
                </div>

                <div className="resume-viewer-wrap">
                    <object
                        className="resume-viewer"
                        data={resume}
                        type="application/pdf"
                    >
                        <p className="resume-fallback">
                            PDF preview is unavailable on this browser.{" "}
                            <a href={resume} target="_blank" rel="noreferrer">
                                Open resume here
                            </a>
                            .
                        </p>
                    </object>
                </div>
            </div>
        </section>
    );
}

export default ResumePage;
