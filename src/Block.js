import { makeDraggable } from "./makeDraggable.js"

export class Block extends HTMLElement {
    constructor() {
        super()
        const template = document.getElementById("dalgona-block")
        const content = template.content.cloneNode(true).querySelector("svg")
        makeDraggable(content)
        this.attachShadow({ mode: "open" })
            .appendChild(content)
    }
}