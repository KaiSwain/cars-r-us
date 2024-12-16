import { setPaintColor } from "./transientState.js"

export const painColorSelector = async () => {
    document.addEventListener("change", changeHandler)
    const response = await fetch("http://localhost:8000/paint-colors")
    const colors = await response.json()
    let html = "<lable> SELECT PAINT COLOR: </lable><select data-type='paint'><option>SELECT</option>"
    for (const color of colors) {
        html += `
        <option value="${color.id}"> ${color.color} </option>`
        
    }
        html += "</select>"
    return html
}

const changeHandler = (changeEvent) => {
    if (changeEvent.target.dataset.type === "paint") {
       
        const chosenOption = parseInt(changeEvent.target.value)
       setPaintColor(chosenOption)
    }
 }