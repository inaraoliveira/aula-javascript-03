/* 1) Cria variável para armazenar a resposta da pergunta: você é maior de 18 anos?
a) Se for maior ou igual a 18 anos, escreva a mensagem no console: Que legal! Você já pode ter a carteira de habilitação.
b) Se for menor de 18 anos, escreva a mensagem no console: Poxa, que pena! Você ainda não pode ter a carteira de habilitação. */

console.log("Você é maior de 18 anos?")
let idade = 17;

if(idade >= 18){
  console.log("Que legal! Você já pode ter a carteira de habilitação.");
}
else{
  console.log("Poxa, que pena! Você ainda não pode ter a carteira de habilitação.")
}

/* 2) Cria variável para armazenar a resposta da pergunta: você já terminou o ensino médio?
a) Se for verdade, escreva a mensagem no console: Poxa, que legal!.
b) Se for mentira, escreva a mensagem no console: Falta pouco! Logo você termina. */

console.log("Você já terminou o ensino médio?")
let resposta = "Sim";

if(resposta === "Sim"){
  console.log("Poxa, que legal!");
}
else{
  console.log("Falta pouco! Logo você termina.")
}