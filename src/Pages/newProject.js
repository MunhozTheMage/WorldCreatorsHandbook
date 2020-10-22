import React, { useState } from 'react';

import "../Styles/Pages/newProject.css";

import { newSaveFromConfig } from '../Scripts/SaveSystem/saveFileManagement.js';

import MainHeader from '../Components/mainHeader.js';
import BoxSelector from '../Components/boxSelector.js';
import ProjectForm from '../Components/projectForm.js';

export default function NewProject(props) {
    var { appInfo } = props;

    const [ display, setDisplay ] = useState("main");

    function sendForm({ name, description }) {
        newSaveFromConfig(name, description, "", (save) => {
            console.log(save);
            appInfo.set.loadedSaveFile(save);
            appInfo.set.page("projectHome");
        });
    }

    return (
        <div className="new-project">
            <MainHeader />
            <p className="central-text">
                { display === 'main' ? 
                "How Would You Like To Start Your World?"
                : 
                "Tell Me More About Your World:"}
            </p>
            { display === 'main' ?
            <BoxSelector 
                leftImageSrc="./assets/images/bird_DARK.svg"
                rightImageSrc="./assets/images/compass_DARK.svg"

                leftMainText="Be Free To Create Your World as You Like!"
                rightMainText="Don’t Want to Waste Time Setting Things Up?"

                leftSmallText="Create an Empty Project"
                rightSmallText="Use the Default Template"

                leftOnclick={() => {setDisplay("form")}}
            />
            : null }
            { display === "form" ?
            <ProjectForm 
                onSend={sendForm}
                buttonLabel="Create"
            />
            : null }
        </div>
    )
}