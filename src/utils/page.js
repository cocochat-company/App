const page = () => {
    const page = document.createElement("div")
    const close_btn = document.createElement("button")

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

    page.appendChild(close_btn)
    document.coco_wrapper.appendChild(page)

    close_btn.addEventListener("click", (e) => {
        page.toggleAttribute("open")
    })
}

export default page
