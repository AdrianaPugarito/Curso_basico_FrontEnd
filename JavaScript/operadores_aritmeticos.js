let numero1 = 20
let numero2 = 2

console.log('soma =', numero1 + numero2)

const soma = numero1 = numero2

console.log('Soma =', soma)
console.log('Subtração =', numero1 - numero2)
console.log('Multiplicação =', numero1 * numero2)
console.log('Divisão =', numero1 / numero2)
console.log('Exponenciação =', numero1 ** numero2)
console.log('Resto da divisão =', numero1 % 3)

//Precedencia de opradores

console.log(3 + 7 * 3) // no js comença por fazer a operação por multplicação se vc quiser começar por outra operaçaõ e so colocar-la entre parentises
console.log((3 + 7) * 3)
console.log((10 + 7 + 8) / 3) //para tirar a media de tres numeros, devemos colocar toda a soma entre parentesis e fora deles a proxima operação

//Biblioteca Match, esta dentro de JS não precisa ser importado, essa biblioteca ja tem valores contidos nela, exemplo o valor de PI e também tem funções

console.log(Math.PI) //developer.mozilla.org tem toda a informação ou no site da MDN
console.log(Math.sqrt(8)) //sqrt calcula raiz quadrada de um numero

