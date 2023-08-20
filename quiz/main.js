const equiz = document.querySelector(".quiz")
const equestao = equiz.querySelector("#numero")
const epergunta = equiz.querySelector("#pergunta")
const eresposta = equiz.querySelector("#resposta")
const contagem = equiz.querySelectorAll(".ct")
const contagemf = document.querySelectorAll(".cfim")
const fim = document.querySelector("#fim")

async function main() {
    const requisicao = await fetch("quiz.json")
    const quiz = await requisicao.json()

    let npergunta = 0
    let c = 0
    let certo = 0
    let errado = 0

    function pergunta(np) {
        if (c >= quiz.length) {
            fim.style.display = "block"
            contagemf[0].innerHTML = certo
            contagemf[1].innerHTML = errado
            return
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
        equestao.innerHTML = ++c + 1
        contagem[0].innerHTML = ++certo
        pergunta(++npergunta)
        return
    }
    alternativaClicada.classList.add("errado")
    setTimeout(() => {
        alternativaClicada.classList.remove("errado");
    }, 500);
    contagem[1].innerHTML = ++errado
    })

    pergunta(0)
}
main()