import React, { useEffect, useState } from 'react';

import "../Styles/Pages/categoryCreation.css";

import { fieldTypes, createCategory, createElementContent } from '../Scripts/SaveSystem/saveObject.js';

import MainHeader from '../Components/mainHeader.js';
import ProjectNavbar from '../Components/projectNavbar.js';
import NameField from '../Components/Fields/nameField.js';
import SelectInput from '../Components/selectInput.js';

export default function CategoryCreation(props) {
    var { appInfo } = props;

    const [ categoryName, setCategoryName ] = useState(""); 
    const [ fields, setFields ] = useState([{ name: "", type: "" }]);

    useEffect(() => {
        if(appInfo.get.navPage !== -1) {
            appInfo.set.navPage(-1);
        }
    }, []);

    function checkAllFilled() {
        return !fields
        .map((field) => !(field.name === "" || field.type === ""))
        .includes(false);
    }

    function newField() {
        // Only proceeds if all fields are filled.
        if(!checkAllFilled()) return;
        
        let newState = [...fields];
        newState.push({ name: "", type: "" });
        setFields(newState);
    }

    function changeField(id, key, newValue) {
        let newState = [...fields];
        newState[id][key] = newValue;
        setFields(newState);
    }

    function removeField(id) {
        if(fields.length > 1) {
            let newState = [...fields];
            newState.splice(id, 1);
            setFields(newState);
        } else {
            let newState = [...fields];
            newState[0] = { name: "", type: "" };
            setFields(newState);
        }
    }

    function renderFields() {
        return fields.map((field, id) => {
            return (
                <div className="category-new-field" key={`new-field-${id}`}>
                    <input
                        placeholder="Field Name"
                        value={field.name}
                        onChange={(e) => {changeField(id, "name", e.target.value)}}
                    ></input>
                    <SelectInput
                        name={`select_field_${id}`}
                        options={fieldTypes}
                        onChange={(v) => {changeField(id, "type", v)}}
                        value={field.type}
                    />
                    <button
                        onClick={() => {removeField(id)}}
                    >
                        <img
                            src="./assets/images/delete_LIGHT.svg"
                        ></img>
                    </button>
                </div>
            )
        });
    }

    function validadeForm() {
        let { categories } = appInfo.get.loadedSaveFile.data;

        let emptyName = categoryName === "";

        let sameNameCategory = categories
        .map((category) => category.name.toLowerCase() !== categoryName.toLowerCase())
        .includes(false);

        let sameNameField = fields
        .map((field) => field.name.toLowerCase())
        .map((name, id, arr) => {
            let inArray = id !== arr.lastIndexOf(name);
            let outsideArray = (
                name !== "name"
                && name !== "description"
                && name !== "tags"
            )

            return inArray || outsideArray;
        })
        .includes(false);

        return checkAllFilled() && !sameNameCategory && !sameNameField && !emptyName;
    }

    function confirmCategoryCreation() {
        if(validadeForm()) {
            let { data, dir } = appInfo.get.loadedSaveFile;
            let newSave = createCategory(data, categoryName);

            fields.forEach((field) => {
                newSave.categories[newSave.categories.length - 1] = createElementContent(
                    newSave.categories[newSave.categories.length - 1],
                    field.name,
                    field.type
                );
            });

            console.log(newSave);
            appInfo.set.loadedSaveFile({ data: newSave, dir });
            appInfo.set.navPage(appInfo.get.loadedSaveFile.data.categories.length);
            appInfo.set.page("categoryHome");
        }
    }

    return (
        <div className="category-creation">
            <MainHeader />
            <ProjectNavbar appInfo={appInfo}/>
            <div className="category-form">
                <NameField 
                    label="Category Name"
                    value={categoryName}
                    changeHandler={(e) => {setCategoryName(e.target.value)}}
                />
                <h2>Custom Fields</h2>

                { renderFields() }

                <button
                    className={`field-creation ${checkAllFilled() ? "" : "invisible"}`}
                    onClick={newField}
                >
                    <img
                        src="./assets/images/plus_DARK.svg"
                    ></img>
                </button>

                <button
                    className="finish-button"
                    onClick={confirmCategoryCreation}
                >
                    Confirm Creation
                </button>

                <p className="observation">
                The fields Name, Description, Image and Tags are created by defaulf, you don’t need to add them yourself.
                </p>
            </div>
        </div>
    )
}