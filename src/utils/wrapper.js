const wrapper = (callback) => {
    const wrapper = document.createElement("div")

    wrapper.classList.add("coco_chat_wrapper")

    document.coco_wrapper = wrapper

    if (document.coco_wrapper) {
        callback?.()
    }
}

export default wrapper