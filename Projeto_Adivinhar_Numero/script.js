let numeroSecreto = parseInt(Math.random() * 11)
console.log(numeroSecreto)


     function Inserir() {
        let respostaChute = document.getElementById("respostaChute")
        let numeroDigitado = parseInt(document.getElementById("valor").value)
             
             if(numeroDigitado === numeroSecreto) {
                 respostaChute.innerHTML = "Parabéns! O número secreto é " + numeroSecreto + ". Você acertou."
                } else if (numeroDigitado > 10 || numeroDigitado < 0) {
                 respostaChute.innerHTML = "Opa, você tem que digitar um número entre 0 e 10, tente novamente."
                } else {
                    if(numeroDigitado < numeroSecreto) {
                        respostaChute.innerHTML = "Que pena, você errou! O número secreto é maior. Tente novamente."
                    } else {
                        respostaChute.innerHTML = "Que pena, você errou! O número secreto é menor. Tente novamente."
                    }
             }
          }



