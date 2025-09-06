import cocoIcon from "../icons/cocoIcon";

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
            <div>
                <input type="text" placeholder="چیزی تایپ کنید..." name="question">
                <button>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                    </g>
                </svg>
            </button>
            </div>
        </form>
    `)

    page.appendChild(close_btn)
    document.coco_wrapper.appendChild(page)

    close_btn.addEventListener("click", (e) => {
        page.toggleAttribute("open")
    })
    // page.toggleAttribute("open")

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
