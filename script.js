const botaoConvertor = document.querySelector(".convertButton")
const selectMoedas = document.querySelector(".select-moedas-gringas")


function converterValores() {
    const valorDoInput = document.querySelector(".input-dos-valores").value
    const valorParaConverter = document.querySelector(".coin-value-to-convert")
    const currencyValueConverted = document.querySelector(".coin-value")

    const valorDoDolar = 4
    const valorDoEuro = 6
    const valorDoBitcoin = 586
     

    if(selectMoedas.value == "Dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorDoInput / valorDoDolar)
        
    }

    if(selectMoedas.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorDoInput / valorDoEuro)
    }

    if(selectMoedas.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(valorDoInput / valorDoBitcoin)
    }





    valorParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL"
    }).format(valorDoInput)




    console.log(valorConvertido)
}

function trocouDeMoeda() {
    const nomeDaMoeda = document.getElementById("currency-value")
    const currencyImg = document.querySelector(".coin-image")

    if(selectMoedas.value == "Dolar") {
        nomeDaMoeda.innerHTML = 'Dolar'
        currencyImg.src = './assets/estados-unidos (1) 1.png'
    }

    if(selectMoedas.value == "Euro") {
        nomeDaMoeda.innerHTML = 'Euro'
        currencyImg.src = './assets/euro.png'
    }


    if(selectMoedas.value == "bitcoin") {
        nomeDaMoeda.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/bitcoin-image (1) (1) (1).png'
    }





    converterValores()

}



selectMoedas.addEventListener("change", trocouDeMoeda)
botaoConvertor.addEventListener("click", converterValores)