import React from 'react';
import "./ProjectDetails.css";
import HeaderSocials from '../home/HeaderSocials'

const ProjectDetails = ({ isOpen, details, onClose }) => {
    if (!isOpen) return null;
    console.log(details);

    const summaryParagraphs = details.summary.split("\n").map((paragraph, index) => (
        <div key={index}>
            <p>{paragraph}</p>
            {index !== details.summary.split("\n").length - 1 && <div className="paragraph-spacer"></div>}
        </div>
    ));

    return (
        <div className="modal-overlay">
            <div className="modal-container" style={{ backgroundColor: details.backgroundColor }}>
                {/* if X is pressed, onClose is called and onClose in Portfolio.jsx sets isOpen to false, 
                this function then returns null */}
                <button className="modal-close-button" onClick={onClose}>X</button>
                <div className="modal-content">
                    {details.banner && (<img src={details.banner} alt={details.title} />)}
                    <div className="details-title">
                        <h2>{details.title}</h2> 
                        <div className='details-links'>
                        {
                            details.links && details.links.map( (elem) =>{
                                const{link,logo,desc} = elem;
                                return(
                                    <div className="details-link" key={link}>
                                        <a href={link} className="" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: details.linkBackground }}>
                                            <img src={logo} alt="logo" className="" />
                                            <div className="details-link-text">{desc}
                                                </div>
                                        </a>
                                    </div>
                            )}
                        
                        )}
                        </div>
                    </div>
                    {summaryParagraphs}
                    <div className="tech-stack-container" style={{ borderColor: details.linkBackground }}>
                        <p>Role: {details.role}</p>
                        <div>
                            {details.techstack && details.techstack.map((tech, index) => (
                                <span className="tech-item" key={index}>{tech}</span>
                            ))}
                        </div>
                    
                    </div>
                    <p className="">Feel free to contact me through Github, Linkedin, or Email. I'd love to discuss details to this project!</p>
                    <HeaderSocials/>
                    <div className='padding'></div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
