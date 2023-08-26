//*isActive TASK_1                   /* done */       
// function isActive(username){
// return `${username} is active now`                               
// }

// console.log(isActive('John'))
// console.log(isActive('Kamil'))
// console.log(isActive('Akif'))

////////////////////////////////////////////////
//*TASK_2   // 3 ededden en boyuyunu tapan funksiya          /* done */         

// function largeNum(num1, num2, num3){
//   if( num1> num2 && num1> num3 ){
//    return num1
//   }else if(num2>num1 &&  num2> num3){                    
//    return num2
//   }else{
//    return num3
//   }                                              
//}

//  console.log(largeNum(11,2,33))
//  console.log(largeNum(3,9,5))
//  console.log(largeNum(9,6,16))
//////////////////////////////////////////////////////////////////

//* Rubl TASK 3              /* done */  

// let dollar = +prompt('dollar hesabinizda ne qede var: ?')
// let ruble = +prompt('rubl hasabinizda ne qede var ?')

// function toRuble(rub, dol) {
//   let sum = ''
//   dol = 75 * rub
//   sum += `Butun depozitler uzre mebleg ${rub + dol} rubl `                  /* done */
//   return sum
// }
// console.log(toRuble(ruble, dollar))
/////////////////////////////////////////////////////////////////
//*TASK_4 

let writeNum = +prompt('1-den 99-a qeder(99_daxil) eded daxil edin : (ikireqemlileri bosluq, yeni ara ile ile)')

function numberToText(num){

for(let i=num; i<100; i++){
  console.log(num)
}
 }

console.log(numberToText(writeNum))  

///////////////////////////////////////////////////////////////////////////////////////

//*TASK_5         /* done */  
//*Parametr kimi iki ədəd qəbul edən və onlardan ən kiçiyini qaytaran min() funksiyası

// num1 = +prompt('birinci parametr')
// num2 = +prompt('ikici parametr')

// function minNum(number1, number2){
//  return (number1 > number2) ? number2 : number1
// }
// console.log(minNum(num1,num2))

////////////////////////////////////////////////////////////////////////////////

//*TASK_6          /* done */  
//*Parametr kimi iki ədəd və riyazi əməliyyatın işarəsini qəbul edən və bu riyazi əməliyyatın nəticəsini qaytaran calc funksiyası

// let number1 = +prompt('birinci eded')
// let operatorFromPrompt = prompt('operator: +, -, /, *')
// let number2 = +prompt('ikinci eded')

// function calc(num1, num2, operator) {
//   switch (operator) {
//     case '+':
//       return num1 + num2
//       break;
//     case '-':
//       return num1 - num2
//       break;
//     case '*':
//       return num1 * num2
//       break;
//     case '/':
//       return num1 / num2
//       break;
//     default:
//       return 'duzgun operator yazilmayib'
//      }
   
  
//  }
// console.log(calc(number1, number2, operatorFromPrompt))

/////////////////////////////////////////////////////////////////////////////////////////////
//*TASK_7 -  SANSLI BILET          

// let a = Math.random()
// let eded = parseInt(a * 1000000)
// console.log(a)
// console.log(eded)

// let sonEded = eded%10
// console.log(sonEded)          ??????????????????????????????????????????????????

///////////////////////////////////////////////////////////////////////////////////////////

//*TASK_8 -  CAPITALIZE WORLDS         /* done */  

// function capitalizeWorlds(soz1, soz2, soz3, soz4){
//  let sentence =  `${soz1} ${soz2} ${soz3} ${soz4}`
//  return sentence.toUpperCase()
// }
// console.log(capitalizeWorlds('bu','menim','8-ci', 'taskimdir'))

/////////////////////////////////////////////////////////////////////

//*TASK_9 -  isEven - ede cut  olduqda true , tek olduqda  false qaytaran FUNKSIYA     /* done */  

// let number = +prompt('eded daxil et')

// function isEven(num){
//   return Boolean(!(num % 2))
// }
// console.log(isEven(number))
//////////////////////////////////////////////////////////////////////////////////////

//*TASK_10  -- Telefon nomresini parametr kimi qebul eden isValidNumber FUNKSIYASI         



// function isValidNumber(phoneNumber){
//   if(phoneNumber.length === 11 && phoneNumber.indexOf[0] == '+' && phoneNumber.indexOf[1] === 7){
//     return true
//   }else{
//     return false
//   }
// }

// console.log(isValidNumber(+7333336565))

////////////////////////////////////////////////////////////////////////////////////////////

//*TASK_11 - numCounter  -   herflerin sayini qaytaran FUNKSIYA       /* done */  

// function numCounter(metn){
// return metn.length
// }

// console.log(numCounter('bu metndeki herflerin sayini geri qaytaran funskiyadir'))






