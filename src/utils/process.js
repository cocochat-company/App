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

    window.coco_chat_welcome = params?.welcome;
    window.coco_chat_position = params?.position;
    window.coco_chat_color = params?.color;
    document.documentElement.style.setProperty("--color-cocochat-primary", `#${params?.color}`);
}

export default process;