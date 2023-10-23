export class SvgSlot extends HTMLElement {
    connectedCallback() {
        setTimeout(() => {
            this.shadowRoot.querySelector("use")?.replaceWith(this.children[0]?.shadowRoot.children[0])
        })
    }
}