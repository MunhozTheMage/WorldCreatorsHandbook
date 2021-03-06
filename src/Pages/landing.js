import React, { useState } from 'react';

import "../Styles/Pages/landing.css";

import { loadSaveFile } from "../Scripts/SaveSystem/saveFileManagement";

import BoxSelector from '../Components/boxSelector.js';

export default function Landing(props) {
    var { 
        appInfo
    } = props;

    function buttonLoad() {
        loadSaveFile((save) => {
            console.log(save);
            appInfo.set.loadedSaveFile(save);
            appInfo.set.page("projectHome");
        });
    }

    return (
        <div className="landing-page">
            <header className="landing-header">
                <img src="./assets/images/ico_quill_ink_DARK.svg"></img>
                <h1>Welcome, World Creator</h1>
                <p>This Is Your Trustworthy Handbook, Are You Ready to Write?</p>
            </header>

            <BoxSelector 
                leftImageSrc="./assets/images/quill_and_paper_DARK.svg"
                rightImageSrc="./assets/images/book_DARK.svg"

                leftMainText="Create a World From Scratch"
                rightMainText="Continue to Work on Your World"

                leftOnclick={() => {appInfo.set.page("newProject")}}
                rightOnclick={buttonLoad}
            />
        </div>
    )
}