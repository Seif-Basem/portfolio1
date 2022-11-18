//header when scroll
let span = document.querySelector("header");
//skills when scroll
let ht = document.querySelector(".mask.full"),
    htt = document.querySelector(".circle .fill"),
    js = document.querySelector(".mask.javascript"),
    jss = document.querySelector(".circle .js"),
    bs = document.querySelector(".mask.bootstrap"),
    bss = document.querySelector(".circle .bs"),
    vu = document.querySelector(".mask.vuejs"),
    vuu = document.querySelector(".circle .vue");

window.onscroll = function () {
    // console.log(this.scrollY);
    if (this.scrollY >= 800) {
    span.classList.add("show");
    } else {
    span.classList.remove("show");
    };
    if (this.scrollY >= 1100) {
        htt.classList.add("start-animation");
        jss.classList.add("start-animation");
        bss.classList.add("start-animation");
        vuu.classList.add("start-animation");
        ht.classList.add("start-animation");
        js.classList.add("start-animation");
        bs.classList.add("start-animation");
        vu.classList.add("start-animation");
        // timeFunction()
    };
}

// function timeFunction() {
//     setTimeout(function(){ 
//         ht.classList.add("start-animation");
//         js.classList.add("start-animation");
//         bs.classList.add("start-animation");
//         vu.classList.add("start-animation");
//         // htt.classList.add("start-animation");
//         // jss.classList.add("start-animation");
//         // bss.classList.add("start-animation");
//         // vuu.classList.add("start-animation");
//     }, 2000);
// }



//burger icon menu
let megaMenu = document.getElementById("megaMenu");
let nav = document.querySelector("header nav");

megaMenu.onclick = function () {
    nav.classList.toggle("show");
}

