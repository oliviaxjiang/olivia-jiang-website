import React from 'react'
import "./about.css"
import Me from "../../assets/olivia.jpg"
import Resume from "../../assets/Olivia-Jiang-Resume.pdf"

const About = () => {
    return (
        <section className="about container section" id = 'about'>
            <h2 className="section_title">About Me</h2>

            <div className="about_container grid">
                <img src = {Me} alt = "" className='about_img'></img>
                <div className="about_data grid">
                    <div className="about_info">
                        <p className="about_description">
                        Hi, I'm a sophomore at Cornell majoring in CS with minors in ORIE and Business, passionately driven by innovative technologies and dedicated to continuous learning.
                        At Cornell, I am part of Women's Club Water Polo and ORIE Undergraduate Research.
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