const comment = () => {
    const comments = [
        document.createComment("Developer => https://github.com/tikrack")
    ]

    comments.map(comment => {
        document.coco_wrapper.appendChild(comment)
    })
}

export default comment