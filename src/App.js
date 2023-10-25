import { SvgSlot } from "./SvgSlot.js"

export class App extends SvgSlot {
    constructor() {
        super()
        const template = document.getElementById("d-app")
        const content = template.content.cloneNode(true).querySelector("svg")
        this.attachShadow({ mode: "open" })
            .appendChild(content)
    }
}