const equiz = document.querySelector(".quiz")
const epergunta = equiz.querySelector(".pergunta")
const eresposta = equiz.querySelector(".resposta")

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
    }
]

let npergunta = 0

function pergunta(np) {
    epergunta.innerHTML = quiz[np].pergunta
    eresposta.innerHTML = ""
    quiz[npergunta].alternativa.forEach(alt => eresposta.innerHTML += `<button>${alt}</button>`)
}

eresposta.addEventListener("click", ev => {
const alternativaClicada = ev.target;
const arrayAlternativas = [...eresposta.children]
const Clicada = arrayAlternativas.indexOf(alternativaClicada)
if (Clicada == quiz[npergunta].resposta) {
    pergunta(++npergunta)
    return
}
alert("ERRADO!!!!!")
})

pergunta(0)