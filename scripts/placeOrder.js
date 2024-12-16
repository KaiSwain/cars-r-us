import { saveOrder } from "./transientState.js"




export const placeOrderButton = () => {
    document.addEventListener("click", handleOrderClick)
    let buttonHTML = "<button id='placeorder'> ORDER </button>"
    return buttonHTML
}

const handleOrderClick = (clickEvent) => {
    if(clickEvent.target.id === "placeorder") {
        saveOrder()
    }
}