function acaoBotao(){
    var numero,fatorial, i

    numero = prompt ("Digite o numero para calcular o fatorial: ")
    fatorial = 1

    for (i = 1; i <= numero; i++) {
        fatorial = fatorial * i;
        
    }
    
   document.getElementById("paragrafo").innerText = "O fatorial de " + numero +  " é: " + fatorial
}

