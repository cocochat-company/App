const button = () => {
    const element = document.createElement("div")
    element.classList.add("coco_chat_button")

    document.coco_wrapper.appendChild(element)

    element.addEventListener("click", (e) => {
        console.log("pk")
    })
}

export default button