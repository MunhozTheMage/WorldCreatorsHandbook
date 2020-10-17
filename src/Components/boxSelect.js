import React from 'react';

import "../Styles/Components/boxSelect.css"

export default function BoxSelect(props) {
    var { 
        imageSrc = "",
        mainText = "",
        smallText = "",
        onclick = () => {},
    } = props;

    return (
        <div className="box-select" onClick={onclick}>
            <img src={imageSrc}></img>
            <h2>{mainText}</h2>
            { smallText !== "" ? 
                <p>{smallText}</p> 
            : null}
        </div>
    )
}