//estrutura de controle de fluxo, ela controla o fluxo de execução, não todo o codigo vai ser executado ate que determinada condição for satisfeita do contrario executa outras linhas

const idade = 20
//a condição sempre va dentro de parenteses
if (idade >= 18) {
    console.log('Vocé e maior de idade!')
} else {
    console.log('Vocé e menor de idade!')
}

console.clear()

//se a media for maior ou igual 7, ele esta aprovado. Se a media e menor ou igual a 5 ele vai para recuperação e se for menor que 5 esta reprovado

let media = 7

if (media >= 7){
    console.log('Aprovado')
}else if (media >= 5){
    console.log('Recuperação')
}else {
    console.log('Reprovado')
}