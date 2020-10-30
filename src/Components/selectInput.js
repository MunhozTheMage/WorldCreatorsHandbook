import React, { useState, useEffect } from 'react';

import "../Styles/Components/selectInput.css";

function SelectOption(props) {
    let { label, onClick } = props;

    return (
        <div
            onClick={() => { onClick() }}
            className="option noselect"
        >
            <p>{label}</p>
        </div>
    )       
}

export default function SelectInput(props) {
    var { 
        name,
        options = [], 
        onChange = (newValue) => {},
        value
    } = props;

    const [ selectText, setSelectText ] = useState("");
    const [ openSelection, setOpenSelection ] = useState(false);

    useEffect(() => {
        const closeSelect = (e) => {
            if(openSelection) {
                setOpenSelection(false);
            }
        }

        addEventListener("click", closeSelect);

        return function cleanup() {
            window.removeEventListener("click", closeSelect);
        }
    });

    useEffect(() => {
        setSelectText(
            getLabelFromValue()
        );
    }, [ value ])

    function getLabelFromValue() {
        let newLabel = "";

        for(var i = 0; i < options.length; i++) {
            if (options[i].value === value) {
                newLabel = options[i].label;
                break;
            }
        }

        return newLabel;
    }

    function renderOptions() {
        return options.map((option, id) => { 
            let { label, value } = option;
            return (
                <SelectOption 
                    label={label}
                    onClick={() => { 
                        setOpenSelection(false);
                        onChange(value);
                    }}
                    key={`${name}_option_${id}`}
                />
            )
        })
    }

    return (
        <div className="select-input">
            <div 
                className={`selected-display noselect`}
                onClick={() => { setOpenSelection(!openSelection) }}
            >
                <p>{ selectText === "" ? "Select..." : selectText }</p>
                <div
                    className={`arrow ${openSelection ? "active" : ""}`}
                    style={{backgroundImage: `url("./assets/images/arrow_right_DARK.svg")`}}
                >
                </div>
            </div>
            <div className={`options-box ${openSelection ? "active" : ""}`}>
                { renderOptions() }
            </div>
        </div>
    )
}