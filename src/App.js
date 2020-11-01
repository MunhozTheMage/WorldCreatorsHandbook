import React, { useState } from 'react';

import './Styles/main.css';

import Landing from './Pages/landing.js';
import NewProject from './Pages/newProject.js';
import ProjectHome from './Pages/projectHome.js';
import CategoryCreation from './Pages/categoryCreation.js';
import CategoryHome from './Pages/categoryHome.js';

// FAKE LODED SAVE FILE FOR TEST PURPOSES
const fakeSave = {
    data: {
        name: "Project Name",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus purus a risus laoreet, nec dapibus sem accumsan. Fusce semper placerat augue ac scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec eleifend rutrum risus id rutrum. Donec pulvinar velit quam, ac commodo ante porttitor ut. Vestibulum ut lectus quis erat varius rhoncus. Cras ultrices vel nisi ac condimentum. Pellentesque nec eros augue. \n Pellentesque at sodales justo, non accumsan tellus. Nunc pretium tellus eu porttitor interdum. Nam sit amet augue scelerisque, fringilla mauris quis, semper lectus. Ut orci quam, consequat eget finibus vel, posuere nec nibh. Aenean tincidunt fermentum elementum. Suspendisse sed pulvinar ex, id molestie eros. Donec luctus a arcu in hendrerit. Sed tincidunt sapien a laoreet dignissim. Nunc tincidunt sagittis odio ut aliquet. Ut maximus diam ut felis rutrum dignissim. Maecenas luctus placerat vulputate. Curabitur massa urna, efficitur ut turpis nec, laoreet sollicitudin urna. In hac habitasse platea dictumst.",
        image: "",
        categories: [
            {
                name: "Characters",
                elements: [],
                element_content: [
                    {
                        name: "Age",
                        type: "input"
                    }
                ],
            }
        ] 
    }
}

export default function App() {
    const [ page, setPage ] = useState("categoryHome");
    const [ loadedSaveFile, setLoadedSaveFile ] = useState(fakeSave);
    const [ navPage, setNavPage ] = useState(1);

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
            {page === "categoryCreation" ? <CategoryCreation appInfo={appInfo} /> : null}
            {page === "categoryHome" ? <CategoryHome appInfo={appInfo} /> : null}
        </div>
    )
}