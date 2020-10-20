import React, { useState } from 'react';

import "../Styles/Components/projectNavbar.css";

import RoundIconButton from './roundIconButton.js';

export default function ProjectNavbar(props) {
    var { appInfo } = props;

    const [ range, setRange ] = useState(0);

    let names = ["Home", ...appInfo.get.loadedSaveFile.data.categories.map(
        category => category.name
    )];

    let displayNames = () => {
        return names.slice(range, 5 + range);
    }

    function renderNames() {
        return displayNames().map(
            (name, id) => (
            <div 
            className={`nav-name noselect ${
                id + range === appInfo.get.navPage ? "selected" : ""
            }`} 
            key={`nav-name-${id}`}>
                <p>{name}</p>
            </div>
            )
        );
    }

    return (
        <header className="navbar">
            { names.length > 5 ?
            <RoundIconButton 
            iconSrc="./assets/images/arrow_left_DARK.svg"
            activeEval={() => range > 0}
            onClick={() => { setRange(range - 1) }}
            className="arrow-left"
            />
            : null }

            <div className="options">
                { renderNames() }
            </div>

            { names.length > 5 ?
            <RoundIconButton 
            iconSrc="./assets/images/arrow_right_DARK.svg"
            activeEval={() => 5 + range < names.length}
            onClick={() => { setRange(range + 1) }}
            className="arrow-right"
            />
            : null }
        </header>
    )
}