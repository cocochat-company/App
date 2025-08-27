const comment = () => {
    const comments = [
        document.createComment("Test COmment"),
        document.createComment("Test COmment 2"),
    ]

    comments.map(comment => {
        document.body.appendChild(comment)
    })
}

export default comment