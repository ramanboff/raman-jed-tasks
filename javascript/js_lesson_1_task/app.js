// TASK_1  - DUZBUCAGIN SAHESI
let width = prompt("duzbucaghin enini yazin")
let height = prompt("duzbucahin hundurluyunu yazin")

let S = width * height
alert(`duzbucagin sahesi ${S} dir`)
console.log(`duzbucagin sahesi ${S} dir`)

// ***********************************************
//TASK_2 - ISTIFADECINI  YASI

let dateBirtday = prompt('Dogum ilinizi daxil edin')

let currentDate = new Date()

let todaysYear = currentDate.getFullYear()
console.log(todaysYear)

let clientsAge = todaysYear - dateBirtday
alert(`sizin ${clientsAge} yasiniz var`)
console.log(`sizin ${clientsAge} yasiniz var`)

//************************************************** */
// TASK_3  - KM-I   MIL-E CEVIR

let setKm = prompt("mesafeni km ile yazin, biz onu mile cevirek")

let km = setKm * 0.6214
alert(`${setKm} milimiz ${km} km edir`)
console.log(`${setKm} milimiz ${km} km edir`)



