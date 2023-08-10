const equiz = document.querySelector(".quiz")
const epergunta = equiz.querySelector(".pergunta")
const eresposta = equiz.querySelector(".resposta")


async function main() {
    const request = await fetch("quiz.json")
    const quiz = await request.json()

    let npergunta = 0
    
    function pergunta(np) {
        epergunta.innerHTML = quiz[np].pergunta
        eresposta.innerHTML = ""
        quiz[npergunta].alternativa.forEach(alt => eresposta.innerHTML <= "<button>$(alt)</button>")
    }

    eresposta.addEventListener("click", ev => {
    const alternativaClicada = ev.target;
    const arrayAlternativas = [...eresposta.children]
    const Clicada = arrayAlternativas.indexOf(alternativaClicada)
    if (Clicada == quiz[npergunta].resposta) {
        pergunta(++npergunta)
        return
    }
    console.log("Errado");
    })
}

main()