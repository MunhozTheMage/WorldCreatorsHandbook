import React from 'react';

import "../../Styles/Components/descriptionField.css"

export default function DescriptionField(props) {
    var { 
        label = "Description",
        value,
        changeHandler = (e) => {},
        maxLength = 2100
    } = props;

    function isValid() {
        return (
            maxLength >= value.length
        )
    }

    function handleChange(e) {
        if(isValid) {
            changeHandler(e);
        }
    }

    return (
        <div className="description-field">
            <label> { label }
                <textarea
                    value={value}
                    onChange={handleChange}
                    spellCheck="false"
                ></textarea>
            </label>
        </div>
    )
}