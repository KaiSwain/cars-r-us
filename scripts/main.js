import { interiorSelector } from "./Interior.js"
import { orderGenerator } from "./orderList.js"
import { painColorSelector } from "./paintColor.js"
import { placeOrderButton } from "./placeOrder.js"
import { techSelector } from "./technology.js"
import { wheelSelector } from "./wheels.js"





const render = async () => {
  const container = document.querySelector(".container")
    const interiorHTML = await interiorSelector()
    const paintColorHTML = await painColorSelector()
    const techHTML = await techSelector()
    const button = await placeOrderButton()
    const orderHTML = await orderGenerator()
    const wheelHTML = await wheelSelector()
    const composedHTML = `
        <h1>CARS R US</h1>

        <article class="choices">
            <section class="Interior-options">
                <h2>Interior</h2>
                ${interiorHTML}
            </section>

            <section class="paint-color">
                <h2>Sizes</h2>
                ${paintColorHTML}
            </section>

            <section class="technology">
                <h2>Tech Packages</h2>
                ${techHTML}
            </section>
            <section class="wheel">
                <h2>Wheels</h2>
                ${wheelHTML}
            </section>
        </article>

        <article class="order">
        </article>
        
        <article class="customOrders">
        <h2>ORDERS</h2>
        ${button}
        ${orderHTML}
        </article>
    `

    container.innerHTML = composedHTML
}
render()

document.addEventListener("neworder", render)