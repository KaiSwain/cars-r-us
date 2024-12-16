const transientState = {
    "interiorId": 0,
    "paint-colorId": 0,
    "techpackageId": 0,
    "wheelId": 0
}

export const setInterior = (option) => {
    transientState.interiorId = option
    console.log(transientState)
}
export const setPaintColor = (option) => {
    transientState["paint-colorId"] = option
    console.log(transientState)
}
export const setTechnology = (option) => {
    transientState.techpackageId = option
    console.log(transientState)
}
export const setWheel = (option) => {
    transientState.wheelId = option
    console.log(transientState)
}

export const saveOrder = async () => {
    const postOrder = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(transientState)
    }
        const response = await fetch("http://localhost:8000/orders", postOrder)
        const customEvent = new CustomEvent("neworder")
        document.dispatchEvent(customEvent)
    
}