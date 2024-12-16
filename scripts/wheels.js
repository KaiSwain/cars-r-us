import { setWheel } from "./transientState.js"

export const wheelSelector = async () => {
    document.addEventListener("change", changeHandler)
    const response = await fetch("http://localhost:8000/wheels")
    const wheels = await response.json()
    let html = "<lable> SELECT WHEELS: </lable><select data-type='wheel'><option>SELECT</option>"
    for (const wheel of wheels) {
        html += `
        <option value="${wheel.id}"> ${wheel.wheel} </option>`
        
    }
        html += "</select>"
    return html
}

const changeHandler = (changeEvent) => {
    if (changeEvent.target.dataset.type === "wheel") {
       
        const chosenOption = parseInt(changeEvent.target.value)
       setWheel(chosenOption)
    }
 }