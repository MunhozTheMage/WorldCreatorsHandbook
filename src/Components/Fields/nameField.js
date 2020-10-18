import React from 'react';

import "../../Styles/Components/nameField.css";

export default function NameField(props) {
    var { 
        label = "Name",
        placeholder = "",
        value,
        changeHandler = (e) => {},
        maxLength = 45 
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
        <div className="name-field">
            <label> { label }
                <input
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                ></input>
            </label>
        </div>
    )
}