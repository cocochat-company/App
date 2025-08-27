const comment = () => {
    const comments = [
        document.createComment("Developer => https://github.com/tikrack"),
    ]

    const coco_chat_button = document.querySelector(".coco_chat_button")

    comments.map(comment => {
        if (coco_chat_button) {
            coco_chat_button.appendChild(comment)
        }
    })
}

export default comment