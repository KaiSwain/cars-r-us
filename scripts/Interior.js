import { setInterior } from "./transientState.js"

    

    export const interiorSelector = async () => {
        document.addEventListener("change", changeHandler)
        const response = await fetch("http://localhost:8000/interiors")
        const interiors = await response.json()
        let html = "<lable> SELECT INTERIOR: </lable><select data-type='interior'><option>SELECT</option>"
        for (const interior of interiors) {
            html += `
            <option value="${interior.id}"> ${interior.type} </option>`
            
        }
            html += "</select>"
        return html
    }

    const changeHandler = (changeEvent) => {
        if (changeEvent.target.dataset.type === "interior") {
           
            const chosenOption = parseInt(changeEvent.target.value)
           setInterior(chosenOption)
        }
     }