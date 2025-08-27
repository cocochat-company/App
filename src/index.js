import "./css/app.css"
import button from "./utils/button";
import comment from "./utils/comment";
import wrapper from "./utils/wrapper";

document.addEventListener("DOMContentLoaded", () => {
    wrapper(() => {
        button()
        comment()
    })
})