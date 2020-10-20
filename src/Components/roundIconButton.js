import React from 'react';

import "../Styles/Components/roundIconButton.css"

export default function RoundIconButton(props) {
    var { 
        iconSrc = "",
        onClick = () => {},
        activeEval = () => true,
        className = ""
    } = props;

    return (
        <button 
        className={`round-icon-button ${activeEval() ? "" : "disabled"} ${className}`}
        onClick={activeEval() ? onClick : () => {}}
        >
            <img src={iconSrc}></img>
        </button>
    )
}