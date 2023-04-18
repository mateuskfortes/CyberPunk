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