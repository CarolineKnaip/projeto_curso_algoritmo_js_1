/*Var
// Seção de Declarações das variáveis
   nota1, nota2, media: real
   nome: caractere
   passou : logico


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   passou := falso
   escreval ("Digite o nome do aluno: ")
   leia (nome)
   escreval ("Digita a nota 1 do aluno: ")
   leia (nota1)
   escreval ("Digite a nota 2 do aluno: ")
   leia (nota2)

   media := (nota1 + nota2) /2

   se media >= 5 entao
      passou:= verdadeiro
   fimse

   se passou || media == >= 3 entao
      escreval ("Aprovado! ", nome, media)
   senao
        escreval ("Reprovado! ", nome, media)
   fimse

Fimalgoritmo*/

   var nome, nota1, nota2, passou;

   passou = false;
   
   nome = prompt ("Digite o nome do aluno: ")
   nota1 = prompt("Digite a nota 1 do aluno: ")
   nota2 = prompt ("Digite a nota 2 do aluno: ")

   media = (parseInt(nota1)+ parseInt(nota2)) /2;

   if (media >= 50)
    passou = true;

    if (passou && (media >= 70 && media <= 90))
        alert ("Aprovado! "+ nome)
    else
        alert ("Reprovado! " + nome)