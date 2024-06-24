import React from 'react'
import "./contact.css"
import HeaderSocials from '../home/HeaderSocials'

const Contact = () => {
    return (
        <section className="contact container section" id='contact'>
            <h2 className="section_title">Contact Me!</h2>
            <h4 className="section_content contact_content">Feel free to reach me through Github, Linkedin, or Email</h4>
            <HeaderSocials/>
        </section>
    )
}
export default Contact