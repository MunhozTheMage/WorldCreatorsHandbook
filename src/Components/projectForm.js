import React, { useState } from 'react';

import "../Styles/Components/projectForm.css"

import NameField from '../Components/Fields/nameField.js';
import DescriptionField from '../Components/Fields/descriptionField.js';

export default function ProjectForm(props) {
    var { 
        onSend = (data) => {},
        buttonLabel = "",
        startsWithContentFrom
    } = props;

    const [ projectForm, _setProjectForm ] = useState({
        name: startsWithContentFrom ? startsWithContentFrom.name : "", 
        description: startsWithContentFrom ? startsWithContentFrom.description : "",
    });

    function setProjectForm(fieldname, newValue) {
        let copy = {...projectForm};
        copy[fieldname] = newValue;
        _setProjectForm(copy);
    }

    return (
        <div className="project-form-area">
                <NameField 
                    label="Project Name"
                    value={projectForm.name}
                    changeHandler={(e) => {setProjectForm('name', e.target.value)}}
                />
                <DescriptionField 
                    label="Project Description"
                    value={projectForm.description}
                    changeHandler={(e) => {setProjectForm('description', e.target.value)}}
                />
                <button
                    onClick={() => { onSend(projectForm) }}
                >{buttonLabel}</button>
        </div>
    );
}