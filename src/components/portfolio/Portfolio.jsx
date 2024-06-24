import React, { useState } from 'react';
import "./portfolio.css";
import Menu from "./Menu";
import ProjectDetails from './ProjectDetails';

const Portfolio = () => {
    const [items,setItems] = useState(Menu);

    //below is a use state hook that initializes a state that holds info for modal
    const [modalInfo, setModalInfo] = useState({ isOpen: false, details: {} });

    const filterItem =(categoryItem) =>{
        const updatedItems = Menu.filter((curElem) =>{
            return curElem.category === categoryItem;
        });

        setItems(updatedItems);
    }

    //pass in information (element) that will be displayed in details
    //note that the healthy habit is to write functions after onClick is triggered
    const openModal = (elem) => {
        setModalInfo({ isOpen: true, details: elem });
    };

    const closeModal = () => {
        setModalInfo({ isOpen: false, details: {} });
    };

    return (
        <section className="work container section" id='work'>
            <h2 className="section_title">Recent Works</h2>

            <div className="work_filters">
                <span className="work_item" onClick={()=>setItems(Menu)}>Everything</span>
                <span className="work_item" 
                    onClick={() => filterItem("creative")}>Creative Projects</span>
                <span className="work_item" 
                    onClick={() => filterItem("hackathon")}>Hackathon Projects</span>
            </div>

            <div className="work_container grid">
                {items.map((elem) => {
                    const{id,image,title,category, link, detail} = elem;
                    return(
                        <div className="work_card" key = {id}>
                            <div className="work_thumbnail">
                                <img src={image} alt="" className="work_img" />
                                <div className="work_mask"></div>
                            </div>

                            <span className="work_category">{category}</span>
                            <h3 className="work_title">{title}</h3>
                            <div className ="work_bott">
                                <a href={link} className="work_button">
                                <i className="icon-link work_button-icon"></i>
                                </a>
                                <a className="read_more_button" onClick={() => openModal(detail)}>
                                    Read More
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
            <ProjectDetails isOpen={modalInfo.isOpen} details={modalInfo.details} onClose={closeModal} />
        </section>
    )
}
export default Portfolio