import React, { useState } from 'react';

import "../Styles/Pages/newProject.css";

import { newSaveFromConfig } from '../Scripts/SaveSystem/saveFileManagement.js';

import MainHeader from '../Components/mainHeader.js';
import BoxSelector from '../Components/boxSelector.js';
import NameField from '../Components/Fields/nameField.js';
import DescriptionField from '../Components/Fields/descriptionField.js';

export default function NewProject(props) {
    var { appInfo } = props;

    const [ display, setDisplay ] = useState("main");
    const [ newProjectForm, _setNewProjectForm ] = useState({
        name: "", description: "",
    });

    function setNewProjectForm(fieldname, newValue) {
        let copy = {...newProjectForm};
        copy[fieldname] = newValue;
        _setNewProjectForm(copy);
    }

    function sendForm() {
        var { name, description } = newProjectForm;
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
            <div className="new-project-area">
                <NameField 
                    label="Project Name"
                    value={newProjectForm.name}
                    changeHandler={(e) => {setNewProjectForm('name', e.target.value)}}
                />
                <DescriptionField 
                    label="Project Description"
                    value={newProjectForm.description}
                    changeHandler={(e) => {setNewProjectForm('description', e.target.value)}}
                />
                <button
                    onClick={sendForm}
                >Create</button>
            </div>
            : null }
        </div>
    )
}