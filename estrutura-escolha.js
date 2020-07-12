function acaoBotao() {

    var valor1, valor2, resultado, operacao

    valor1 = prompt ("Digite o primeiro valor: ")
    operacao = prompt ("Digite o operador: ")
    valor2 = prompt ("Digite o segundo valor: ")

    switch(operacao){
        case "+":
            resultado = parseInt (valor1) + parseInt (valor2)
            break;
        case "-":
            resultado = parseInt (valor1) - parseInt(valor2)
            break;
        case "*":
            resultado = parseInt (valor1) * parseInt(valor2)
            break;
        case "/":
            resultado = parseInt (valor1) / parseInt(valor2)
            break;
    }

    document.getElementById("paragrafo").innerText = "O resultado do calculo é: " + resultado
        
}
