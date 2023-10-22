export class SvgSlot extends HTMLElement {
    connectedCallback() {
        setTimeout(() => {
            console.log(this.shadowRoot.innerHTML)
            console.log(this.shadowRoot.querySelector("slot"))
            this.shadowRoot.querySelector("slot")?.replaceWith(this.innerHTML)
        })
    }
}