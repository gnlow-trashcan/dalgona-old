const root = document.querySelector("foreignObject")

import { SvgSlot } from "./SvgSlot.js"

export class Block extends SvgSlot {
    constructor() {
        super()
        const template = document.getElementById("d-block")
        this.content = template.content.cloneNode(true).querySelector("svg > g")
        this.makeDraggable(this.content)
    }

    getContent() {
        return this.content
    }

    moveToRoot() {
        this.parentElement.removeChild(this)
        root.appendChild(this)
        console.log(this)
    }

    makeDraggable(target) {
        console.log("makeDraggable", this, target)
        target.addEventListener("pointerdown", e => {
            console.log("drag start", this)
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