export const orderGenerator = async () => {
    const response = await fetch('http://localhost:8000/orders?_expand=interior&_expand=paint-color&_expand=techpackage&_expand=wheel')
    const orders = await response.json()
    let html = ""
    for (const order of orders) {  
        let totalCost = order["paint-color"].price + order.wheel.price + order.interior.price + order.techpackage.price
        let convertedPrice = totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"})
        html += `${order["paint-color"].color} car with ${order.wheel.wheel}, ${order.interior.type} interior, and the ${order.techpackage.package} for a total cost of ${convertedPrice}`
        
    }
    return html
}

