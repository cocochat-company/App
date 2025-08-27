import "./css/app.css"

import button from "./utils/button";
import comment from "./utils/comment";
import wrapper from "./utils/wrapper";
import styles from "./utils/styles";
import page from "./utils/page";
import process from "./utils/process";

document.addEventListener("DOMContentLoaded", () => {
    process()
    styles()
    wrapper(() => {
        button()
        comment()
        page()
    })
})