const wrapper = (callback) => {
    const wrapper = document.createElement("div")

    wrapper.classList.add("coco_chat_wrapper")

    document.body.appendChild(wrapper)
    document.coco_wrapper = wrapper

    if (document.coco_wrapper) {
        callback?.()
    }else {
        console.error("Error in Starting Wrapper => CocoChat")
    }
}

export default wrapper