/* numero, fatorial, i: inteiro


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva ("Digite o numero para calcular o fatorial. ")
   leia(numero)
       fatorial := 1
       para i de 1 ate numero faca
           fatorial := fatorial * i
       fimpara
        
   escreva ("O fatorial de", numero, " é: ", fatorial) */
    function acaoBotao(){
    var numero,fatorial, i

    numero = prompt ("Digite o numero para calcular o fatorial: ")
    fatorial = 1
    for (i = 1; i <= numero; i++) {
        fatorial = fatorial * i;
        
    }
   document.getElementById("paragrafo").innerText = "O fatorial de " + numero +  " é: " + fatorial
    }

