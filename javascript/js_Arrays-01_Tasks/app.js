   
 //*TASK_1. Massiv yaradin.  olcusunu 5e menimsedin ve prompt-la massivi number-lerle doldurun. 

// const myArray = new Array(5)
  
// for (let i = 0; i< myArray.length; i++){
//   let userNumber = +prompt(`eded daxil edin `)
//    myArray[i] = userNumber
// }
// console.log(myArray);

//*TASK_2. Funksiya yazin ki, massivde olan butun elementlerin hasilini ekrana cixarsin. 

// const arr = [2,3,4,5,6,3,2]
// let multyply = 1
// for(let i = 0;  i< arr.length; i++){
//   multyply *= arr[i]  
//  }
// console.log(multyply);             //result  4320


 //*TASK_3. multiply(a,b,c) funksiyasi yaradin. Men ona istediyim sayda argument versem bele islemelidir, hasilini geri qaytarmalidir.  

// const multiply = (...arr) => {
//   let multiply = 1
//   for (let ed of arr){
//     multiply *= ed
//   }
//   return multiply
// } 
// console.log(multiply(1,2,3,4,4));


// let nums = [2,3,6,7]

// let num2 = nums.map((num) => {
//   return num*2
// })
// console.log(num2);


let telebeler = ['Elmira','Hemide','Can','Ismayil','Firuddin','Seadet']

let arr2  = telebeler.map((telebe) => {
  for(let i=0; i<telebeler.length; i++){
    if(telebe.length > 5){
      return telebe[i] = 'deyisdim'
    }else{
      return telebe 
    }
 }
})
console.log(arr2);