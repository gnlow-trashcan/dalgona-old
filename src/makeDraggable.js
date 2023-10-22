export const makeDraggable = (target) => {
    target.addEventListener("pointerdown", e => {
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