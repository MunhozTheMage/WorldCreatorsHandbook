import React, { useState } from 'react';

import './Styles/main.css';

import Landing from './Pages/landing.js';
import NewProject from './Pages/newProject.js';
import ProjectHome from './Pages/projectHome.js';

export default function App() {
    const [ page, setPage ] = useState("landing");
    const [ loadedSaveFile, setLoadedSaveFile ] = useState({});
    const [ navPage, setNavPage ] = useState(0);

    const appInfo = {
        get: { page, loadedSaveFile, navPage },
        set: { 
            page: setPage,
            loadedSaveFile: setLoadedSaveFile,
            navPage: setNavPage
        }
    }

    return (
        <div>
            {page === "landing" ? <Landing appInfo={appInfo} /> : null}
            {page === "newProject" ? <NewProject appInfo={appInfo} /> : null}
            {page === "projectHome" ? <ProjectHome appInfo={appInfo} /> : null}
        </div>
    )
}