import React from 'react'
import "./about.css"
// import Person from "../../assets/person.jpeg"
//1:08:20

const About = () => {
    return (
        <section className="about container section" id = 'about'>
            <h2 className="section_title">About Me</h2>

            <div className="about_container grid">
                {/* <img src = {Person} alt = "" className='about_img'></img> */}
                <div className="about_data grid">
                    <div className="about_info">
                        <p className="about_description">I am Olivia Jiang, a computer science student at Cornell University</p>
                        <a href="" className="btn">Download Resume</a>
                    </div>

                    <div className="about_skills grid">
                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Development</h3>
                                <span className="skills_number development">100%</span>
                            </div>

                            <div className="skills_bar">
                                <spans className="skills_percentage"></spans>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">OR</h3>
                                <span className="skills_number or">100%</span>
                            </div>

                            <div className="skills_bar">
                                <spans className="skills_percentage">

                                </spans>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Swimming</h3>
                                <span className="skills_number swimming">100%</span>
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