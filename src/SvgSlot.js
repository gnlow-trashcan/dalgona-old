export class SvgSlot extends HTMLElement {
    connectedCallback() {
        setTimeout(() => {
            console.log("slot", this.children[0])
            this.getContent().querySelector("use")?.replaceWith(this.children[0]?.getContent())
        })
    }
    getContent() {
        return this.shadowRoot
    }
}