const noticias = document.getElementById("noticias")
const menu = document.querySelectorAll(".menu")
const cdprojectred = document.getElementById("cdprojectred")

let visn = false
let viscd = false
let largura = window.innerWidth
let larguram = 900

function opmenu(n, m, v) {
    if (v) {
        n.classList.remove("aberto");
        n.classList.add("fechado");
        m.classList.remove("menu-aberto");
        m.classList.add("menu-fechado");
        v = false;
    } else {
        n.classList.add("aberto");
        n.classList.remove("fechado");
        m.classList.add("menu-aberto");
        m.classList.remove("menu-fechado");
        v = true;
    }
    return v;
}

function fechar(n) {
    n.classList.remove("aberto");
    n.classList.add("fechado");
    menu.forEach((m) => {
        m.classList.remove("menu-aberto");
        m.classList.add("menu-fechado");
    });
}

noticias.addEventListener("click", function () {
    largura = window.innerWidth
    if (largura < larguram) {
        fechar(cdprojectred)
        visn = opmenu(noticias, menu[1], visn);
    }
});
  
cdprojectred.addEventListener("click", function () {
    largura = window.innerWidth
    if (largura < larguram) {
        fechar(noticias)
        viscd = opmenu(cdprojectred, menu[0], viscd);
    }
});

const setaa = document.querySelector("#rolar")
const setab = document.querySelector("#rolar div")

let pos

window.addEventListener("scroll", function() {
    pos = window.scrollY
    if(pos < 30) {
        setaa.classList.remove("invisivel")
        setab.classList.remove("invisivel")
    }
    else {
        setaa.classList.add("invisivel")
        setab.classList.add("invisivel")
    }
})
