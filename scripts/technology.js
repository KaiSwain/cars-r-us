import { setTechnology } from "./transientState.js"

export const techSelector = async () => {
    document.addEventListener("change", changeHandler)
    const response = await fetch("http://localhost:8000/techpackages")
    const techPackages = await response.json()
    let html = "<lable> SELECT TECH PACKAGE: </lable><select data-type='tech'><option>SELECT</option>"
    for (const techPackage of techPackages) {
        html += `
        <option value="${techPackage.id}"> ${techPackage.package} </option>`
        
    }
        html += "</select>"
    return html
}


const changeHandler = (changeEvent) => {
    if (changeEvent.target.dataset.type === "tech") {
       
        const chosenOption = parseInt(changeEvent.target.value)
       setTechnology(chosenOption)
    }
 }