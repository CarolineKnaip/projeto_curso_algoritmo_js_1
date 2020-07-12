/*idade, limite, i: inteiro
nome: caractere


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval ("Digite a quantidade de vezes que vai ser verificada a idade: ")
leia(limite)
i := 0
enquanto i < limite faca
escreva ("Digite o nome da pessoa: ")
leia (nome)
escreva ("Digite a idade de ", nome, " : ")
leia (idade)
se idade >= 18 entao
   escreval (nome, " você é maior de idade!")
senao
   escreval(nome, " você é menor de idade!")
fimse
i:= i+ 1
fimenquanto

Fimalgoritmo */

function acaoBotao(){

var idade, limite, i , nome 
limite = prompt ("Quantas vezes será verificado: ")
i = 0

while (i < limite) {
    nome = prompt ("Digite o nome da pessoa: ")
    idade = prompt ("Digite a idade de " + nome + " : ")

    if (idade >= 18)
    document.getElementById("paragrafo").innerText = nome + " você é maior de idade!"
    else
    document.getElementById("paragrafo").innerText = nome + " você é menor de idade!"

    i++

}
}