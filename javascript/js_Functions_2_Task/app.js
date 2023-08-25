//*isActive TASK_1
// function isActive(username){
// return `${username} is active now`
// }

// console.log(isActive('John'))
// console.log(isActive('Kamil'))
// console.log(isActive('Akif'))

////////////////////////////////////////////////
//*TASK_2   // 3 ededden en boyuyunu tapan funksiya

// function largeNum(num1, num2, num3){
//   if( num1> num2 && num1> num3 ){
//    return num1
//   }else if(num2>num1 &&  num2> num3){
//    return num2
//   }else{
//    return num3
//   }

//  }

//  console.log(largeNum(11,2,33))
//  console.log(largeNum(3,9,5))
//  console.log(largeNum(9,6,16))
//////////////////////////////////////////////////////////////////

//* Rubl TASK 3

let dollar = +prompt('dollar hesabinizda ne qede var: ?')
let ruble = +prompt('rubl hasabinizda ne qede var ?')

function toRuble(rub, dol) {
  let sum = ''
  dol = 75 * rub
  sum += `Butun depozitler uzre mebleg ${rub + dol} rubl `
  return sum
}
console.log(toRuble(ruble, dollar))
