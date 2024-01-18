import React from 'react'
import "./home.css"
// import Me from "../../assets"
//46:22
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                {/* <img src="" alt="" /> */}
                <h1 className="home_name">Olivia Jiang</h1>
                <span className="home_education">I am a computer science student
                </span>
                <HeaderSocials/>

                <a href="#contact" className="btn">
                    Contact Me!
                </a>
                <ScrollDown/>
            </div>
        </section>
    )
}
export default Home