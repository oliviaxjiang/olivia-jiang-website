import React from 'react'
import "./about.css"
import Me from "../../assets/olivia.jpg"
import Resume from "../../assets/Olivia-Jiang-Resume.pdf"

const About = () => {
    const handleScroll = () => {
        const projectsSection = document.getElementById('work');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section className="about container section" id = 'about'>
            <h2 className="section_title">About Me</h2>

            <div className="about_container grid">
                <img src = {Me} alt = "" className='about_img'></img>
                <div className="about_data grid">
                    <div className="about_info">
                        <p className="about_description">
                            Hi, I'm a rising junior at Cornell majoring in Computer Science minoring in Operations Research.
                            Feel free to check out my <span className="clickable-text" onClick={handleScroll}>projects</span> below!
                            At Cornell, I am part of the <a href="https://www.cornellappdev.com" className="clickable-text" target="_blank" rel="noopener noreferrer">AppDev Project Team</a> and have helped thousands of students with apps that make everyday lives easier!
                        </p>
                        <a href={Resume} className="btn" download>Download Resume</a>
                    </div>

                    <div className="about_skills grid">
                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Computer Science</h3>
                                <span className="skills_number cs">Major</span>
                            </div>

                            <div className="skills_bar">
                                <spans className="skills_percentage"></spans>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Operations Research and Information Engineering</h3>
                                <span className="skills_number or">Minor</span>
                            </div>

                            <div className="skills_bar">
                                <spans className="skills_percentage">

                                </spans>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Cornell AppDev</h3>
                                <span className="skills_number business">Project Team</span>
                            </div>

                            <div className="skills_bar">
                                <spans className="skills_percentage">

                                </spans>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Club Water Polo</h3>
                                <span className="skills_number business"></span>
                            </div>

                            <div className="skills_bar">
                                <spans className="skills_percentage">

                                </spans>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Undergraduate Research</h3>
                                <span className="skills_number business"></span>
                            </div>

                            <div className="skills_bar">
                                <spans className="skills_percentage">

                                </spans>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default About