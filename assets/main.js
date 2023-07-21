const noticias = document.querySelector("nav > ul > button")
const menu = document.getElementById("menu")

let vis = false
noticias.addEventListener("click", function() {
    if(vis) {
        noticias.classList.remove("noticias-aberto")
        noticias.classList.add("noticias-fechado")
        menu.classList.remove("menu-aberto")
        menu.classList.add("menu-fechado")
        vis = false
    }
    else {
        noticias.classList.add("noticias-aberto")
        noticias.classList.remove("noticias-fechado")
        menu.classList.add("menu-aberto")
        menu.classList.remove("menu-fechado")
        vis = true
    }
})
/*
function maisop() {
    if (!vis) {
        noticias.style.backgroundColor = "cyan"
        noticias.style.color = "black"
        menu.style.display = "block"
        vis = true
    }
    else {
        noticias.style.backgroundColor = "transparent"
        noticias.style.color = "cyan"
        menu.style.display = "none"
        vis = false
    }
}

noticias.onclick = maisop
console.log("aaasdf")
*/
/*
const parte = document.querySelectorAll(".select")
const res = document.querySelectorAll(".resumo")
const img = document.querySelectorAll(".imglogo")
let pri = true

function b2077() {
    if (pri === true) {
        img[0].style.marginTop = "10vh"
        img[1].style.marginTop = "25vh"
        img[0].style.transform = "scale(1.5)"
        img[1].style.transform = "scale(1)"
        res[0].style.visibility = "visible"
        res[1].style.visibility = "hidden"
        res[0].style.marginTop = "20px"
        res[1].style.marginTop = "0px"
        pri = false
    }
    else {
        img[0].style.marginTop = "25vh"
        img[0].style.transform = "scale(1)"
        res[0].style.visibility = "hidden"
        res[0].style.marginTop = "0px"
        pri = true
    }
}

function bedgerunners() {
    if (pri === false) {
        img[1].style.marginTop = "10vh"
        img[0].style.marginTop = "25vh"
        img[1].style.transform = "scale(1.5)"
        img[0].style.transform = "scale(1)"
        res[1].style.visibility = "visible"
        res[0].style.visibility = "hidden"
        res[1].style.marginTop = "20px"
        res[0].style.marginTop = "0px"
        pri = true
    }
    else {
        img[1].style.marginTop = "25vh"
        img[1].style.transform = "scale(1)"
        res[1].style.visibility = "hidden"
        res[1].style.marginTop = "0px"
        pri = false
    }
}

parte[0].onclick = b2077
parte[1].onclick = bedgerunners
*/

