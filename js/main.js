const toggleBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");

function setOpen(isOpen) {
    toggleBtn.classList.toggle("is-active", isOpen);
    menu.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
    toggleBtn.setAttribute("aria-expanded", String(isOpen));

    if (isOpen) {
        menu.removeAttribute("hidden");
    } else {
        menu.setAttribute("hidden", "");
    }
}

toggleBtn.addEventListener("click", () => {
    const isOpen = toggleBtn.classList.contains("is-active");
    setOpen(!isOpen);
});

menu.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => setOpen(false))
);

document.addEventListener("click", (e) => {
    const isOpen = toggleBtn.classList.contains("is-active");
    if (!isOpen) return;
    if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
        setOpen(false);
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
});