import React, { useState } from 'react';

import '../Styles/Pages/projectHome.css';

import MainHeader from '../Components/mainHeader.js';
import ProjectNavbar from '../Components/projectNavbar.js';
import RoundIconButton from '../Components/roundIconButton.js';
import ProjectForm from '../Components/projectForm.js';

export default function ProjectHome(props) {
    var { appInfo } = props;
    var { data } = appInfo.get.loadedSaveFile;

    const [ display, setDisplay ] = useState("content");

    function renderText(txt) {
        console.log(appInfo);
        return txt.split("\n").map((paragraph, id) => {
            return (
                <p key={`paragraph-${id}`}>{paragraph}</p>
            )
        });
    }

    function sendForm({ name, description }) {
        let newData = {...data};
        newData.name = name;
        newData.description = description;
        appInfo.set.loadedSaveFile({ data: newData, dir: appInfo.get.loadedSaveFile.dir });
        setDisplay("content");
    }

    return (
        <div className="project-home">
            <MainHeader/>
            <ProjectNavbar appInfo={appInfo}/>
            { appInfo && display === "content" ?
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

            {display === "content" ? 
                <div className="buttons-menu">
                <RoundIconButton 
                    iconSrc="./assets/images/quill_and_paper_LIGHT.svg"
                    onClick={() => { setDisplay("edit") }}
                />
                <RoundIconButton 
                    iconSrc="./assets/images/plus_LIGHT.svg"
                />
                </div>
            : null }

            { display === "edit" ?
            <div className="edit-area">
                <h2 className="central-text" >What do you want to change?</h2>
                <ProjectForm 
                    onSend={sendForm}
                    buttonLabel="Finish Edition"
                    startsWithContentFrom={data}
                />
            </div>
            : null }

            {display === "edit" ? 
                <div className="buttons-menu-left">
                <RoundIconButton 
                    iconSrc="./assets/images/arrow_left_LIGHT.svg"
                    onClick={() => { setDisplay("content") }}
                />
                </div>
            : null }
        </div>
    )
}