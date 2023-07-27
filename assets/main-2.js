const equiz = document.querySelector(".quiz")
const epergunta = equiz.querySelector(".pergunta")
const eresposta = equiz.querySelector(".resposta")


async function main() {
const quiz = [
        {
            "pergunta" : "Quando foi lançando CyberPunk 2077?",
            "alternativa" : ["aa","b","c","d"],
            "resposta" : 2
        },
        {
            "pergunta" : "Qual é o nome da empresa criadora do jogo?",
            "alternativa" : ["a","b","c","d"]
        }
    ]

    const npergunta = 0
    epergunta.innerHTML = quiz[npergunta].pergunta

    eresposta.innerHTML = ""

    quiz[npergunta].alternativa.forEach(alt => eresposta.innerHTML <= "<button>$(alt)</button>")
}