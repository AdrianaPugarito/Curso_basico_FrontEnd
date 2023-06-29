//Coerção ou conversão de tipo

//Coerção Explicita (Manual)

const numero = 10

console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero) //para coverter de numero a texto
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number('12345'))
console.log(parseFloat('2537464.24'))
console.log(parseInt('2537464.24'))
console.log(Boolean(0)) //difrente de 0 e verdadero se for zero e falso
console.log(Boolean(7))

console.clear()

//Coerção Implícita (Automatica)

console.log('10' + 1) //Quando suma texto com numero, Js concatena junta os dois textos não suma
console.log('10' - 1)//quando e subtração ele entende q e realmente uma resta
console.log('10' * 4)
console.log(10 - 'adriana')//NaN não e um numero, JS identifica q esse tetxto não é um numero

console.clear()

let n = 1 + '1'

n = n - 1

console.log(n)

//dica se selecionamos so um trecho de codigo e rodamos ele e so ele que vai ser exwcutado no console

console.log(2 + 3 + 4 + '5') //ele sumou 2+3+4 = 9 e concatenou juntou com 5 resultado 95
console.log('5' + 2 + 3 + 4) //concatenou juntou todo resultado 5234 
console.log("10" - '4' - "3" - 2 + '5') //restou 10 - 4 - 3 - 2 = 1 e depois concatenou com 5




