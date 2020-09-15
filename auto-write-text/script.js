const text = document.getElementById("text");
let p = "this test will show char by char indefinetly."
let indx = 0;

function textUpdate() {

    text.innerHTML += p.charAt(indx);
    indx++

    if (indx > p.length) { indx = 0; text.innerHTML = '' }

}

setInterval(textUpdate, 100)
