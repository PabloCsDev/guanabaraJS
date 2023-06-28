           /*CONDIÇÕES ANINHADAS*/ 
/*EXEMPLO 1:*/
/*var idade = 18
console.log(`Vc tem ${idade} anos.`)
if (idade < 16) {
  console.log('Não VOTA!');
} else if (idade <= 17 || idade > 67) {
    console.log('Voto Opcional!')
} else {
    console.log('VOTO OBRIGATORIO!')
} */

var agora = new Date()
var  time = agora.getHours()
console.log(`Agora são ${time} horas`)
if (time < 13) {
    console.log('Bom dia!')
} else if (time > 13 && time < 19) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}