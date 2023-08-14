const equiz = document.querySelector(".quiz")
const epergunta = equiz.querySelector(".pergunta")
const eresposta = equiz.querySelector(".resposta")
const fim = document.querySelector("#fim")

const quiz = [
    {
        "pergunta" : "Quando foi lançando CyberPunk 2077?",
        "alternativa" : ["25/01/2021","09/11/2019","10/12/2020","26/11/2020"],
        "resposta" : 2
    },
    {
        "pergunta" : "Qual é o nome da empresa criadora do jogo?",
        "alternativa" : ["LG","ubisoft","Rockstar","CDProjectRed"],
        "resposta" : 3
    },
    {
        "pergunta" : "Qual ator renomado emprestou sua voz e semelhança ao personagem Johnny Silverhand em Cyberpunk 2077?",
        "alternativa" : ["Keanu Reeves","Robert Downey Jr.","Tom Cruise","Chris Hemsworth"],
        "resposta" : 0
    },
    {
        "pergunta" : "Qual é a cidade principal onde se passa a maior parte do jogo Cyberpunk 2077?",
        "alternativa" : ["Los Angeles","Tóquio","Night City","Neo York"],
        "resposta" : 2
    }
]

let npergunta = 0
let c = 0

function pergunta(np) {
    if (c >= 4) {
        fim.style.display = "block"
    }
    epergunta.innerHTML = quiz[np].pergunta
    eresposta.innerHTML = ""
    quiz[npergunta].alternativa.forEach(alt => eresposta.innerHTML += `<button>${alt}</button>`)
}

eresposta.addEventListener("click", ev => {
const alternativaClicada = ev.target;
const arrayAlternativas = [...eresposta.children]
const Clicada = arrayAlternativas.indexOf(alternativaClicada)
if (Clicada == quiz[npergunta].resposta) {
    ++c
    pergunta(++npergunta)
    return
}
alert("ERRADO!!!!!")
})

pergunta(0)