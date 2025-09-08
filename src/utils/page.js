import cocoIcon from "../icons/cocoIcon";
import sendIcon from "../icons/sendIcon";
import cornerIcon from "../icons/cornerIcon";
import cornerIcon2 from "../icons/cornerIcon2";

const page = () => {
    const page = document.createElement("div");
    const close_btn = document.createElement("button");

    let position = window.coco_chat_position;
    if (position) {
        switch (position) {
            case "bottom-right":
                page.style.right = "22px";
                break;
            case "bottom-left":
                page.style.left = "22px";
                break;
            default:
                page.style.right = "22px";
        }
    }
    page.style.opacity = "0";
    page.setAttribute("position", position);

    page.classList.add("coco_chat_page");
    close_btn.classList.add("coco_chat_close_page");

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
    `);

    page.insertAdjacentHTML("beforeend", `
        <div class="coco_chat_page_header">
            <div>
                ${cocoIcon(40, 40, "#fff", "margin-top: 5px")}
            </div>
            <div>
                <span>کوکو چت, آماده برای جواب دادن</span>
                <p>سوالات خود را درباره ما بپرسید</p>
            </div>
        </div>
        <div class="coco_chat_page_content"></div>
        <form class="coco_chat_page_footer">
            <textarea placeholder="پیامی بنویسید..." name="question" required></textarea>
            <button>${sendIcon()}</button>
        </form>
    `);

    page.appendChild(close_btn);
    document.coco_wrapper.appendChild(page);

    close_btn.addEventListener("click", () => {
        page.toggleAttribute("open");
    });

    const textarea = page.querySelector("textarea");
    const chatContent = page.querySelector(".coco_chat_page_content");
    const coco_chat_form = page.querySelector("form.coco_chat_page_footer");

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

    function addMessage(content, agent = "system") {
        const wrapper = document.createElement("div");
        wrapper.classList.add("coco_chat_message_wrapper");
        wrapper.setAttribute("agent", agent);

        const innerDiv = document.createElement("div");
        if (agent === "user") {
            innerDiv.innerHTML = `${cornerIcon()} ${content}`;
        } else {
            innerDiv.innerHTML = `${cornerIcon2()} ${content}`;
        }

        wrapper.appendChild(innerDiv);
        chatContent.appendChild(wrapper);

        chatContent.scrollTop = chatContent.scrollHeight;
    }

    coco_chat_form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const formValues = Object.fromEntries(formData.entries());
        const userMessage = formValues.question.trim();
        if (!userMessage) return;

        addMessage(userMessage, "user");

        textarea.value = "";
        autoResize();

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    try {
                        let data = JSON.parse(xhr.responseText);
                        if (data.success && data.data && data.data.content) {
                            addMessage(data.data.content, "system");
                        } else {
                            addMessage("خطا در دریافت پاسخ از سرور", "system");
                        }
                    } catch {
                        addMessage("پاسخ نامعتبر از سرور دریافت شد", "system");
                    }
                } else {
                    addMessage("خطا در ارتباط با سرور", "system");
                }
            }
        };
        xhr.open("GET", `https://api.cocochat.ir/api/v1/question?question=${encodeURIComponent(userMessage)}`, true);
        xhr.send();
    });
};

export default page;
