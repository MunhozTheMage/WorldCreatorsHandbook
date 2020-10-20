import React from 'react';

import '../Styles/Components/projectHome.css';

import MainHeader from '../Components/mainHeader.js';
import ProjectNavbar from '../Components/projectNavbar.js';
import RoundIconButton from '../Components/roundIconButton.js';

export default function ProjectHome(props) {
    var { appInfo } = props;
    var { data } = appInfo.get.loadedSaveFile;

    function renderText(txt) {
        console.log(appInfo);
        return txt.split("\n").map((paragraph) => {
            return (
                <p>{paragraph}</p>
            )
        });
    }

    return (
        <div className="project-home">
            <MainHeader/>
            <ProjectNavbar appInfo={appInfo}/>
            { appInfo ?
            <div className="content-container">
                <div className='content'>
                    <div 
                    className="image-container"
                    style={{backgroundImage: `url("${!data.image ? "./assets/images/placeholder.jpg" : data.image}")`}}
                    >
                    </div>
                    <div className="text-container">
                        <h2>{data.name}</h2>
                        <div className="description">
                            { renderText(data.description) }
                        </div>
                    </div>
                </div>
            </div>
            : null }
            <div className="buttons-menu">
                <RoundIconButton 
                    iconSrc="./assets/images/quill_and_paper_LIGHT.svg"
                />
                <RoundIconButton 
                    iconSrc="./assets/images/plus_LIGHT.svg"
                />
            </div>
        </div>
    )
}