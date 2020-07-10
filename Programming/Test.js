function f1() {
    alert("Big skree");
}

let button = document.querySelector("button")
let button2 = document.querySelector("p")

button2.addEventListener("click", f1);
button.addEventListener("click", function() {
    button2.innerText = "RRRRREEEEEEE";
    button2.style.color = "red"
});

