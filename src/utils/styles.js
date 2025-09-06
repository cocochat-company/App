const styles = () => {
    const links = [
        // "https://unpkg.com/cocochat@latest/dist/cocochat.css",
        "http://localhost:5173/src/css/app.css"
    ]

    links.map(link => {
        const lnk = document.createElement("link");
        lnk.rel = "stylesheet";
        lnk.type = "text/css";
        lnk.href = link;
        document.head.appendChild(lnk);
    })
}

export default styles