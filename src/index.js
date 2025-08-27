import "./css/app.css"

import button from "./utils/button";
import comment from "./utils/comment";
import wrapper from "./utils/wrapper";
import styles from "./utils/styles";

document.addEventListener("DOMContentLoaded", () => {
    styles()
    wrapper(() => {
        button()
        comment()
    })
})