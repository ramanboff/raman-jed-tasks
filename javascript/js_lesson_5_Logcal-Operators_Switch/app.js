// Task1. Direction elave et deyecem hara get))

let direction = prompt('istiqameti daxil et:')

switch(direction) {
  case 'up':
    console.log(' yuxari get')
break;
  case 'right':
    console.log( 'saga get')
    break;
  case 'left':
    console.log( 'sola get')
    break;
  case 'down':
    console.log( 'awagi get')
    break;
  default:
    console.log('terpenme')
}

// *********************************************************************

// TASK-2 Cekivi boyuvu yaz BMI- ivi deyecem

let ceki = +prompt('cekinizi yazin:')
let boy  = +prompt('boyunuz nece metrdir?')

let result = Math.round(ceki /(boy * boy))
console.log(result)

if(result < 18.5){
  console.log('biraz yemek ye')
}else if(result < 25){
  console.log('Normalsan')
}else if(result < 30){
  console.log('BMI-in kokdur')
}else{
  console.log(`'obese'`)
}