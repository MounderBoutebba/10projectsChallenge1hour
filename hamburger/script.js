const btn = document.getElementById("btn")
const nav = document.getElementById("nav")
let toggle = false
btn.addEventListener("click", () => {
    toggle ? nav.classList.add('toggle') : nav.classList.remove("toggle");

    toggle = !toggle;
})