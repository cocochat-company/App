function getScriptParams() {
    const scripts = document.getElementsByTagName("script");
    for (let script of scripts) {
        if (script.src && script.src.includes("cocochat.umd.js")) {
            const url = new URL(script.src, window.location.href);
            return Object.fromEntries(url.searchParams.entries());
        }
    }
    return {};
}

const process = () => {
    const params = getScriptParams();

    document.documentElement.style.setProperty("--color-cocochat-primary", `#${params?.color}`);
}

export default process;