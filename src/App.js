import React, { useState } from 'react';

import './Styles/main.css';

import Landing from './Pages/landing.js';
import NewProject from './Pages/newProject.js';

export default function App() {
    const [ page, setPage ] = useState("newProject");
    const [ loadedSaveFile, setLoadedSaveFile ] = useState({});

    const appInfo = {
        get: { page, loadedSaveFile },
        set: { 
            page: setPage,
            loadedSaveFile: setLoadedSaveFile
        }
    }

    return (
        <div>
            {page === "landing" ? <Landing appInfo={appInfo} /> : null}
            {page === "newProject" ? <NewProject appInfo={appInfo} /> : null}
        </div>
    )
}