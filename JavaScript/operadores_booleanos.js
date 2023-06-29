//como resultado sempre vai ser tru ou false
//Igualdade: == (ou ===)
//Desigualdade: != (ou !==)
//Maior que: >
//Menor que: <
//Maior ou igual que: >=
//Menor ou igual que: <=
// JS so compara o conteudo por padrão quando usamos == e não o valor
//quando usamos === comparamos conteudo e tipo exemplo: conteudo e tipo(texto, numero)

const numero = 10

console.log(numero == 10) 
console.log(numero > 20)
console.log(numero > 10)

console.log(numero == 10) //== para comparar com numero
console.log(10 == '10') //== para comparar  com string

//No JS quando usamos == e só comparar o conteudo não o valor 
// === e para comparar o valor do conteudo, ou seja conetudo e tipo exemplo: 10(numero) não e igual a "10"(string) 
// Boa pratica e usar sempre os tres para evitar bags

console.log(numero === '10')

console.clear()//limpa o console ou terminal

console.log(10 != 10)
console.log(10 != '10')
console.log(10 !== '10')

//a mesma coisa sucesse com !=, se for só dois vai comparar conteudo não tipo, para comparar conteudo e tipo utilizar !==

//Conjuções logicas são mais que condicões, exemplo: Posso fazer tal coisa se cumpro com tal aoutra

//AND => && (e)

let idade =26
let tenhoCNH = true

const possoDirigir = idade >= 18 && tenhoCNH === true

console.log('Posso dirigir?', possoDirigir)

//OR => || (comparação; ou; condição)

idade = 40

const votoFacultativo = idade < 18 || idade >= 70 // se for menor que 18 ou acima de 70

console.log('Posso votar?', votoFacultativo)

//NOT => ! para inverter o resultado

const souToter = false

console.log(!souToter) // usansdo o ! vc enverte o resultado, no caso seria tru


