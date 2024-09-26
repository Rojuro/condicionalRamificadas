// ------- Exercicio 1 ---Números Primos-- -->
function verificarNumPrimo() {
    document.getElementById("respostaPrimo").innerHTML = ""
    let num = Number(document.getElementById("num").value)
    if (num % 2 == 0) {
        document.getElementById("respostaPrimo").innerHTML += `<p> ${num} é divisível por 2</p>`
    }
    if (num % 3 == 0) {
        document.getElementById("respostaPrimo").innerHTML += `<p> ${num} é divisível por 3</p>`
    }
    if (num % 5 == 0) {
        document.getElementById("respostaPrimo").innerHTML += `<p> ${num} é divisível por 5</p>`
    }
    if (num % 7 == 0) {
        document.getElementById("respostaPrimo").innerHTML += `<p> ${num} é divisível por 7</p>`
    }
    if (
        (num % 2 != 0 && num % 3 != 0 && num % 5 != 0 && num % 7 != 0)
        ||
        (num == 2 || num == 3 || num == 5 || num == 7)
    ) {
        document.getElementById("respostaPrimo").innerHTML += "<p>é um número primo</p>"
    }
}

// ------- Exercicio 2 ---Números Primos-- -->
function verificaIdade() {
    document.getElementById("respostaIdade").innerHTML = ""
    let idade = Number(document.getElementById("idade").value)
    if (idade >= 6 && idade <= 11) {
        document.getElementById("respostaIdade").innerHTML += `<p> ${idade} A categoria é infantil.</p>`
    }
    else if (idade >= 12 && idade <= 17) {
        document.getElementById("respostaIdade").innerHTML += `<p> ${idade} A categoria é juvenil.</p>`
    }
    else if (idade >= 18 && idade <= 35) {
        document.getElementById("respostaIdade").innerHTML += `<p> ${idade} A categoria é adulto.</p>`
    }
    else {
        document.getElementById("respostaIdade").innerHTML += `<p> ${idade} O atleta não pode competir</p>`
    }
    
}

// ------- Exercicio 3 ---índice de poluição-- -->

function verificaPoluicao() {
    document.getElementById("respostaPoluicao").innerHTML = ""
    let poluicao = Number(document.getElementById("poluicao").value)

    if (poluicao >= 5 && poluicao <= 30) {
        document.getElementById("respostaPoluicao").innerHTML += `<p> ${poluicao} % O índice de poluição aceitável.</p>`
    }

    else if (poluicao > 30 && poluicao <= 39) {
        document.getElementById("respostaPoluicao").innerHTML += `<p> ${poluicao} % As indústrias do 1º grupo são intimadas a suspenderem suas atividades.</p>`
    }

    else if (poluicao > 40 && poluicao <= 49) {
        document.getElementById("respostaPoluicao").innerHTML += `<p> ${poluicao} % As industrias do 1º e 2º grupo serão intimadas.</p>`
    }

    else {
        document.getElementById("respostaPoluicao").innerHTML += `<p> ${poluicao} % todos os grupos devem ser notificados e paralisarem suas atividades.</p>`
    }
    
}

// ------- Exercicio