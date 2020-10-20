import React from 'react';

import "../Styles/Components/mainHeader.css";

export default function MainHeader() {
    return (
        <header className="main-header">
            <div className="upper-header">
                <div>
                    <img src="./assets/images/ico_quill_ink_MEDIUM.svg"></img>
                    <h1 className="noselect">World Creator's Handbook</h1>
                </div>
            </div>
            <div className="lower-header">
                <h4 className="noselect">Brought to you by MunhozTheMage</h4>
            </div>
        </header>
    )
}