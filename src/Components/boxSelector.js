import React from 'react';

import "../Styles/Components/boxSelector.css";

import BoxSelect from './boxSelect.js';

export default function BoxSelector(props) {
    var { 
        leftImageSrc = "",
        leftMainText = "",
        leftSmallText = "",
        leftOnclick = () => {},
        rightImageSrc = "",
        rightMainText = "",
        rightSmallText = "",
        rightOnclick = () => {},
    } = props;

    return (
        <div className="box-selector">
            <BoxSelect
            imageSrc={leftImageSrc}
            mainText={leftMainText}
            smallText={leftSmallText}
            onclick={leftOnclick}
            />
            <BoxSelect
            imageSrc={rightImageSrc}
            mainText={rightMainText}
            smallText={rightSmallText}
            onclick={rightOnclick}
            />
        </div>
    );
}