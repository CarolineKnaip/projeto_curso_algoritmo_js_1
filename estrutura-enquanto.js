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