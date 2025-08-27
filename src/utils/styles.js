const styles = () => {
    const links = [
        "https://unpkg.com/cocochat/dist/cocochat.css",
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