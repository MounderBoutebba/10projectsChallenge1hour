const imgs = document.querySelectorAll("img");
const container = document.getElementById("container")
let indx = 0;
console.log(imgs[0])

function rotate() {

    container.style.transform = "translateX(" + -indx * 500 + "px)";
    indx++

    if (indx > imgs.length - 1) {
        indx = 0
    }
}

setInterval(rotate, 1500)