import React, { useState } from 'react';

import './Styles/main.css';

import Landing from './Pages/landing.js';

export default function App() {
    const [ page, setPage ] = useState("landing");

    return (
        <div>
            {page === "landing" ? <Landing /> : null}
        </div>
    )
}