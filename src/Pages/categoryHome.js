import React, { useState } from 'react';

import "../Styles/Pages/categoryHome.css";

import MainHeader from '../Components/mainHeader.js';
import ProjectNavbar from '../Components/projectNavbar.js';
import RoundIconButton from '../Components/roundIconButton.js';

export default function CategoryHome(props) {
    var { appInfo } = props;
    var currentCategory = appInfo.get.loadedSaveFile.data.categories[appInfo.get.navPage - 1];

    console.log(currentCategory);

    function renderArticles() {
        currentCategory.elements.map((article) => {
            return (
                <div className="article-button">
                    <div 
                        className="image"
                        style={{backgroundImage: `url("${article.image ? article.image : "./assets/images/placeholder.jpg"}")`}}
                    ></div>
                    <h2>{article.name}</h2>
                    <p>{article.description.substring(0, 260) + ( article.description.length > 260 ? "... Click to read more." : "")}</p>
                </div>
            )
        })
    }

    return (
        <div className="category-home">
            <MainHeader />
            <ProjectNavbar appInfo={appInfo}/>
            <div className="page-content">
                <h1>{currentCategory.name}</h1>
                <div className="articles-list">
                    { renderArticles() }
                </div>
            </div>
            <div className="buttons-menu">
                <RoundIconButton 
                    iconSrc="./assets/images/quill_and_paper_LIGHT.svg"
                    onClick={() => { }}
                />
                <RoundIconButton 
                    iconSrc="./assets/images/plus_LIGHT.svg"
                    onClick={() => { }}
                />
            </div>
        </div>
    )
}