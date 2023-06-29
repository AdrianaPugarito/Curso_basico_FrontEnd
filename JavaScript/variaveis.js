//palavra reservada let e para definir variavél, vem da frase Let to chance: deixe mudar, permite mudar. 
//Antigamente era usado var como palavra reservada mais no 2015 foi mudado por presentar alguns problemas
//Para mais informção sobre variáveis pode visitar https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript?gclid=Cj0KCQjwtO-kBhDIARIsAL6Lord0-PO9blNo9agwxoNjF_NoyhSAN3wq7P4COXZOsomtj9kGLyQFdfQaAsLBEALw_wcB

let idade = 26 //criando a primeira variavél

console.log(idade)

// Tipos de variaveis

idade = 30 // alterando o valor da variavel, o valor pode ser alterado - tipo number
let numero = 30 // number
let altura = 1.77 //number mesmo sendo decimal continua sendo de tipo numero, JS não diferencia
let nome = "Adriana" // string por ser texto
let estudando = true // booleano (true-false)

//tipos primitivos numero, string e booleano

console.log(numero, typeof numero) //typeof para que imprima o tipo de varaivel
console.log(altura)
console.log(nome, typeof nome) //quando colocamos a virgula significa que queremos imprimir mais uma coisa
console.log(estudando, typeof nome)

let outra; //variavel sem valor e undefined não definida, poder vacia ou com valor undefined

console.log(outra)

let nula = null //nula

console.log(nula)

//console.clear()

var variavel = 30 //ja não e mais usada, não e boa pratica usar

const constante = 60 //e uma variavel que e constante, ou seja não pode alterar o valor

