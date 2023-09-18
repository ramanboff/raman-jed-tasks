//*TASK_1
// Bir add funksiyasi yazin. 3 arqument alsin. ilk 2si ededler (eded1 ve eded2) 3cusu ise, funksiya olsun. (callback). men o funksiyaya console.log ve ya alert verib, ozum teyin edim, neticeni alert-de gostersin, yoxsa console-da.
/* add(3,5,console.log) //  console-a 8 yazmalidi
add(3,5,alert) */ //  alert-e 8 yazmalidi

// A: ela
const add = (num1, num2, cb) => {
  cb(num1 + num2)
}
add(3, 5, function (result) {
  alert(`result: ${result}`)
  console.log(`result: ${result}`)
})
//////////////////////////////////////////////////////////////////
//*TASK_2
