import React from 'react';
import "./ProjectDetails.css";

const ProjectDetails = ({ isOpen, details, onClose }) => {
    if (!isOpen) return null;
    console.log(details);

    return (
        <div className="modal-overlay">
            <div className="modal-container" style={{ backgroundColor: details.backgroundcolor }}>
                {/* if X is pressed, onClose is called and onClose in Portfolio.jsx sets isOpen to false, 
                this function then returns null */}
                <button className="modal-close-button" onClick={onClose}>X</button>
                <div className="modal-content">
                    <img src={details.banner} alt={details.title} />
                    <div className="details-title">
                        <h2>{details.title}</h2> 
                        <div className='details-links'>
                        {
                            details.links && details.links.map( (elem) =>{
                                const{link,logo,desc} = elem;
                                return(
                                    <div className="details-link">
                                        <a href={link} className="">
                                        <img src={logo} alt="logo" className=""/>
                                        {desc}
                                        </a>
                                    </div>
                            )}
                        
                        )}
                        </div>
                    </div>
                    <p>{details.summary}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
