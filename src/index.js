import "./css/app.css"
import button from "./utils/button";
import comment from "./utils/comment";

document.addEventListener("DOMContentLoaded", () => {
    wrapper(() => {
        button()
        comment()
    })
})