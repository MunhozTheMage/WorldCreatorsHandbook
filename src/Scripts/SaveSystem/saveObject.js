// Creates an object for a project save, this function returns the 
// save object.

export default function createSaveObject(name = "", description = "", image = "") {
    return {
        name,
        description,
        image,
        categories: []
    }
}

// Creates a category for a given save object, this function will
// return the modified save object.

export function createCategory(saveObj = {}, name = "", description = "", image = "") {
    let newSaveObj = { ...saveObj };
    let category = {
        name, 
        description, 
        image,
        element_content: [],
        elements: []
    }
    newSaveObj.categories.push(category);
    return newSaveObj;
}

// Creates a new element content field for a given category, this
// function will return the modified category.

export function createElementContent(category = {}, name = "", type = "") {
    let newCategory = { ...category };
    let elementContent = { name, type };
    newCategory.element_content.push(elementContent);
    return newCategory;
}

// Creates a element for a given category, this function will
// return the modified category, containing a new element with
// the default name, description and image fields, as well as
// containing the fields specified on the element_content of the
// category. 

export function createElement(
    category = {}, name = "", description = "", image = "", other = {}
) {
    let newCategory = { ...category };
    let element = { 
        name,
        description,
        image
    };

    newCategory.element_content.forEach((content) => {
        element[content.name] = other[content.name];
    });

    newCategory.elements.push(element);
    return newCategory;
}