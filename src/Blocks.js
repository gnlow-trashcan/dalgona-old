export class Blocks extends HTMLElement {
    connectedCallback() {
        console.log(
            [...this.children]
            .map(x => x.content)
        )
        this.attachShadow({ mode: "open" })
        ;[...this.children]
            .forEach(block => {
                this.shadowRoot.appendChild(block.content)
            })
    }
}