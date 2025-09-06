import cocoIcon from "../icons/cocoIcon";
import sendIcon from "../icons/sendIcon";

const page = () => {
    const page = document.createElement("div")
    const close_btn = document.createElement("button")

    let position = window.coco_chat_position;
    if (position) {
        switch (position) {
            case "bottom-right":
                page.style.right = "22px"
                break;
            case "bottom-left":
                page.style.left = "22px"
                break;
            default:
                page.style.right = "22px"
        }
    }
    page.style.opacity = "0"
    page.setAttribute("position", position)

    page.classList.add("coco_chat_page")
    close_btn.classList.add("coco_chat_close_page")

    close_btn.insertAdjacentHTML("beforeend", `
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="coco_chat_close_page_icon">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <g id="Menu / Close_SM"> 
                    <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </g> 
            </g>
        </svg>
    `)
    page.insertAdjacentHTML("beforeend", `
        <div class="coco_chat_page_header">
            <div>
                ${cocoIcon(40, 40, "#fff", "margin-top: 5px")}
            </div>
            <div>
                <span>کوکو چت, اماده برای جواب دادن</span>
                <p>سوالات خود را درباره ما بپرسید</p>
            </div>
        </div>
        <div class="coco_chat_page_content">
            
        </div>
        <form class="coco_chat_page_footer">
                <textarea placeholder="پیامی بنویسید..." name="question" required></textarea>
                <button>${sendIcon()}</button>
        </form>
    `)

    page.appendChild(close_btn)
    document.coco_wrapper.appendChild(page)

    close_btn.addEventListener("click", (e) => {
        page.toggleAttribute("open")
    })

    const textarea = page.querySelector("textarea");

    function autoResize() {
        textarea.style.height = "30px";

        const newHeight = Math.min(textarea.scrollHeight, 150);

        textarea.style.height = newHeight + "px";

        if (textarea.scrollHeight > 150) {
            textarea.style.overflowY = "scroll";
        } else {
            textarea.style.overflowY = "hidden";
        }
    }

    autoResize();

    textarea.addEventListener("input", autoResize);

    textarea.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && e.ctrlKey) {
            e.preventDefault();
            coco_chat_form.requestSubmit();
        }
    });


    let coco_chat_form = document.querySelector("form.coco_chat_page_footer")
    coco_chat_form.addEventListener("submit", (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget);
        const formValues = Object.fromEntries(formData.entries());

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            let data = JSON.parse(xhr.responseText)
            alert(data.data.content)
        };
        xhr.open("GET", `http://127.0.0.1:8000/api/v1/question?question=${formValues?.question}`, true);
        xhr.send();
    })

}

export default page
