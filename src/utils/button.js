const button = () => {
    const element = document.createElement("div")
    element.classList.add("coco_chat_button")

    document.coco_wrapper.appendChild(element)

    element.addEventListener("click", (e) => {
        let page = document.querySelector(".coco_chat_page")
        page.toggleAttribute("open")
    })
}

export default button