// TASK-1
let name = prompt('Adinizi yazin','Ali')
let surname = prompt('Soyadinizi yazin', 'Isiyev')
let age = +prompt('Yasinizi yazin', 23)
console.log(`I'm ${name}. My surname is ${surname}. I am ${age} years old`)



// *****************************************

// TASK-2
let r = +prompt('cevrenin radiusunu daxil et:')
const p = 3

let L = 2*p*r
console.log(L)



//******************************************* */

// TASK-3
let num1 = +prompt('birinci ededi daxil et:')
let num2 = +prompt('ikici ededi daxil et:')

let adition = num1 + num2
let subtraction = num1 - num2
let division = num1 / num2
let mutiplication = num1 * num2

console.log(
 `
 ${num1} + ${num2} = ${adition}
 ${num1} - ${num2} = ${subtraction}
 ${num1} / ${num2} = ${division}
 ${num1} * ${num2} = ${mutiplication}
 `
 )