let numeroSecreto = parseInt(Math.random() * 11)
console.log(numeroSecreto)
let tentativas = 3
let tentativasOpcoes = document.getElementById("tentativas")

function Inserir() {
    let respostaChute = document.getElementById("respostaChute")
    let numeroDigitado = parseInt(document.getElementById("valor").value)

            if (numeroDigitado > 10 || numeroDigitado < 0) {
                respostaChute.innerHTML = "Opa, você tem que digitar um número entre 0 e 10, tente novamente."
            } else if(numeroDigitado === numeroSecreto) {
                respostaChute.innerHTML = "Parabéns! O número secreto é " + numeroSecreto + ". Você acertou."
                document.getElementById("botao").disabled = true;
            } else {
                   if(numeroDigitado < numeroSecreto) {
                       respostaChute.innerHTML = "Que pena, você errou! O número secreto é maior que " + numeroDigitado + ". Tente novamente."
                   } else {
                       respostaChute.innerHTML = "Que pena, você errou! O número secreto é menor que " + numeroDigitado + ". Tente novamente."
                   }
            } 

    tentativas = tentativas - 1;
    if(numeroDigitado === numeroSecreto) {
        tentativasOpcoes.innerHTML = "Atualize a página para reiniciar."
    } else {
        tentativasOpcoes.innerHTML = "Você tem mais " + tentativas + " tentativas."
    }
    
    if (tentativas === 0) {
        if(numeroDigitado === numeroSecreto) {
            tentativasOpcoes.innerHTML = "Atualize a página para reiniciar."
        } else {
        respostaChute.innerHTML = "Que pena, suas tentativas acabaram"
        document.getElementById("botao").disabled = true;
        tentativasOpcoes.innerHTML = "Atualize a página para reiniciar."
        }
    }     
}







// código com while
// function Inserir() {
//     let respostaChute = document.getElementById("respostaChute")
//     let numeroDigitado = parseInt(document.getElementById("valor").value)
//     let tentativas = 3
//         while (tentativas > 0) {
//             if (numeroDigitado > 10 || numeroDigitado < 0) {
//                 respostaChute.innerHTML = "Opa, você tem que digitar um número entre 0 e 10, tente novamente."
//             } else if(numeroDigitado === numeroSecreto) {
//                 respostaChute.innerHTML = "Parabéns! O número secreto é " + numeroSecreto + ". Você acertou."
//             } else {
//                    if(numeroDigitado < numeroSecreto) {
//                        respostaChute.innerHTML = "Que pena, você errou! O número secreto é maior. Tente novamente."
//                    } else {
//                        respostaChute.innerHTML = "Que pena, você errou! O número secreto é menor. Tente novamente."
//                    }
//             } 
//             console.log(tentativas)   
//             tentativas--
//             }
// }