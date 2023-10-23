const root = document.querySelector("foreignObject")

export class Block extends HTMLElement {
    constructor() {
        super()
        const template = document.getElementById("dalgona-block")
        const content = template.content.cloneNode(true).querySelector("svg")
        this.makeDraggable(content)
        this.attachShadow({ mode: "open" })
            .appendChild(content)
    }

    moveToRoot() {
        this.parentElement.removeChild(this)
        root.appendChild(this)
        console.log(this)
    }

    makeDraggable(target) {
        console.log(target)
        target.addEventListener("pointerdown", e => {
            //this.moveToRoot()
            e.stopPropagation()
            const {
                e: initX,
                f: initY,
            } = target.transform.baseVal.getItem(0).matrix
            const start = {
                x: e.clientX - initX,
                y: e.clientY - initY,
            }
            const onMove = e => {
                target.transform.baseVal.getItem(0).setTranslate(
                    e.clientX - start.x,
                    e.clientY - start.y,
                )
            }
            document.body.addEventListener("pointermove", onMove)
            document.body.addEventListener("pointerup", e => {
                document.body.removeEventListener("pointermove", onMove)
            }, { once: true })
        })
    }
}