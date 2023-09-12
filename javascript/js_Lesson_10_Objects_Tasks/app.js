//*TASK1 ***********************************************************
/* prop2Taker adinda funksiya yaradin. Argument kimi obyekt alsin. Hemin obyektin 'prop-2' propertysinin value-nu cixarsin. Mes: 

prop2Taker({  one: 1,  'prop-2': 2})  // 2
prop2Taker({  'prop-2': 'two',  prop: 'test'})  // 'two' */
//*TASK1 start

// const propsTaker = (obj) => {
//   return(obj['prop'])
// }

// //first call
// let result = propsTaker({
//  one: 1,
// 'prop-2':2
// })

// console.log(result)

// /////////////////////////////////////////////
// //second call

// let result2 = propsTaker({
//  'prop-2':'two',
//  prop: 'test'
// })

// console.log(result2)

//*TASK2 ****************************************************************
/* propertyTaker adinda funksiya yaradin. Argument kimi obyekt (obj) ve string (proprtyName) alsin. Hemin obyektin verdiyim propertyni cixarsin. Mes: 

propertyTaker({  continent: 'Asia',  country: 'Japan'}, 'continent') // 'Asia'
propertyTaker({  country: 'Sweden',  continent: 'Europe'}, 'country')  // 'Sweden'
propertyTaker({name:'ali', age:12}, 'name')  // 'ali' */

//*TASK2 start
//  const propertyTaker =(obj, propertyName) => {
//  console.log(obj[propertyName])
//  }

//  propertyTaker({  continent: 'Asia',  country: 'Japan'}, 'continent')
//  propertyTaker({  country: 'Sweden',  continent: 'Europe'}, 'country')
//  propertyTaker({name:'ali', age:12}, 'name')

//*TASK_3 ****************************************************************
/* existsAndTruthy adinda funksiya yaradin. Argument kimi obyekt(obj) ve string (propertyName)  alsin. Eger hemin obyektden o adda property varsa ve truthy-dirse, true qaytarsin eks halda false qaytarsin. Mes, */
//*TASK_3 start

//  const existsAndTruthy = (obj, propertyName) => {
//   if(propertyName in obj && propertyName in obj === true ){
//    console.log('true')
//   }else{
//    console.log('false')
//   }
//  }
//  existsAndTruthy({a:1,b:2,c:3},'b')
//  existsAndTruthy({x:'a',y:null,z:'c'},'y')
//  existsAndTruthy({x:'a',b:'b',z:undefined},'z')

//*TASK_4 ****************************************************************

//   Calculator obyekti yaradin. 5 methodu olsun: read(), sum(), multiply(), divide(), subtract()

// read() -> prompt-la 2 eded alsin, ve onlari calculator-da proeprty kimi yadda saxlasin,
// qalanlari da neticeni console-a cixarsin.

// istifade edeceyiniz seylerden biri de   [ ] dynamic property-dir, ya da this.

//**TASK_4**START *    Aug 31
// const Calculator = {
// num1: 0,
// num2: 0,

// read(){
//   const num1 = +prompt('eded1 yaz')
//   const num2 = +prompt('eded2 yaz')
//   this.num1 = num1
//   this.num2 = num2
// },
// sum(){
//   console.log(this.num1 + this.num2)
// },
// multiply(){
//   console.log(this.num1 * this.num2)
// },
// devide(){
//   console.log(this.num1 / this.num2)
// },
// subtract(){
//   console.log(this.num2 - this.num2)
// }
// }
// Calculator.read()
// Calculator.sum()
// Calculator.multiply()
// Calculator.devide()
// Calculator.subtract()

//*TASK_5 ****************************************************************
// Car constructor-u yaradin. Biz hemin constructor-u cagiranda onun modelini, istehsal ilini, sahibini verek. Ve elbette, masinin surmek, tormozlamaq kimi methodlari olmalidir ki, onlari da verin. Meselen, surmek methodunu cagirsam ekrana,  ali zapi markali masinina qaz verir.

//**START */
// function Car(model, il, sahibi) {
//   this.model = model
//   this.il = il
//   this.sahibi = sahibi
//   this.surmek = () => {
//     console.log(`${this.sahibi} ${this.model} markali masina qaz verir`)
//   }
// }

// const raman = new Car('zapi', 1934, 'raman')
// raman.surmek()
// const ali = new Car('mercedes', 2005, 'ali')
// ali.surmek()

//**********************************************  STRINGS*/*******************************
//**************************************************************************************** *
//*************TASK 1 */ ??????????????????????????????????????
// repeatedSymbolCounter('ALIONALI', 'A') // return 2 -> must be done with for loop!!!!


// const repeatedSymbolCounter = (name, char) => {
//  for()

// }
// repeatedSymbolCounter('ALIONALI', 'A')


//*************TASK 2 */
// capitalize(str) -> alion -=> Alion

const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1)
  //or
  // return str.replace(str[0], str[0].toUppercase())
}
console.log(capitalize('alion'))

//*************TASK 3 */
// snakeToKebab(str) -=> SNAKE_CASE to kebab-case -=> BU_TEST_UCUNDUR -> bu-test-ucundur

const snakeToKebab = (str) =>
  str.toUpperCase().slice(0, 5).concat('_') +
  str.slice(5, 7).concat('_') +
  str.slice(7).toUpperCase()

console.log(snakeToKebab('snakeToKebab'))

//**TASK 4- birdefe yazilib

//*************TASK 5 */
// Funksiya yaradin, ilk characterimizi deyisek: ilkHerfiDeyis(soz, ilkHerf)
// ilkHerfiDeyis('alion', "A") // Alion

const ilkHerfiDeyis = (soz, ilkHerf) => {
  return soz[0].replace(ilkHerf)
}
console.log(ilkHerfiDeyis('alion', 'A'))

//*__________________________________________________________________________________________
//*__________________________________________________________________________________________
//*__________________________________________________________________________________________
//*__________________________________________________________________________________________

//*************TASK 1 *///////////////////////////////////////////////
// 1. Write a JavaScript function to split a sentence (JS funksiyasi yazin, cumle verilir, cumledeki sozleri ayirsin).

const splitSentence = (cumle) => {
  return cumle.split(' ')
}
console.log(splitSentence('Hardan gelirsen ?, Hara gedirsen?'))

//*************TASK 2 */
// 2. Write a JavaScript function to convert a string in abbreviated form. (Alion GreenHeart -> Alion G.)

const abbreviated = (name) => {
  let result1 = name.split(' ')
  console.log(result1)
  let result2 = `${result1[0]} ${result1[1].slice(0, 1)}`
  return result2.concat('.')
}
let result = abbreviated('Alion GreenHeart')
console.log(result)

//*************TASK 3 */
// 3. removeCharacterFromString("Alion","A") -> "lion" . bele bir funksiya yazin, sozden character silme. Alion sozu verdik ve A characteri verdik, sozden A-ni sildi.

const removeCharacterFromString = (name, charachter) => {
  return name.replace(charachter, '')
}

console.log(removeCharacterFromString('Alion', 'A'))

//*************TASK 4 */
// 4. verify gmail address. (gmail addressleri sonu @gmail.com ile bitmelidir, ve ondan evvel en azi 5 simvol olmalidir. abcdf@gmail.com meselen)

const verifyGmailAddress = (gmail) =>
  gmail.endsWith('@gmail.com') && gmail.length >= 15

console.log(verifyGmailAddress('12345@gmail.com'))
console.log(verifyGmailAddress('1dsds2s345@gmail.com'))
console.log(verifyGmailAddress('1345@gmail.com')) //1-4 end

//*__________________________________________________________________________________________
//*__________________________________________________________________________________________
//*__________________________________________________________________________________________
//*__________________________________________________________________________________________
//**//////////////////////////////////////////////////////////////////////////////////////

//*************TASK 1 */
// 1.İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin. Bu rəqəmi üçrəqəmli olana qədər, 7 artırın. Son dəyəri konsola çıxarın.

let numFromUser = +prompt('ikirerqemli eded daxil edin')

const increaseNum = (num) => {
  while(num < 100 ){
    num +=7
  }
  return num
}

console.log(increaseNum(numFromUser))

//*************TASK 2 */

// 2.Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın.
// Proqram N ədədini istifadəçidən soruşur.

let N = +prompt('nece defe tekrar olsun ?')

const repeat = () => {
  for(let i = 0; i < N ; i++){
    console.log('I know how to use cycles')
  }

}
console.log(repeat())

// string repeat Method
let N1 = +prompt('nece defe tekrar olsun ?')
let sentence = 'I know how to use cycles'

let repeaT = sentence.repeat(N1)
console.log(repeaT)



//*************TASK 3 */
// 3. Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.

const showSum = () => {
  let sum = 0

  for (let i = 0; i < 100; i++) {
    if (i < 100 && !(i % 2 === 0)) {
      sum += i
    }
  }

  console.log(sum)
}
showSum()


//*************TASK 4 */

// 4.Biletin şanslı olub olmadığını yoxlayan funksiya yazın.
// Altı rəqəmli ədəd qəbul edən və ilk üç rəqəminin cəminin ikinci üç rəqəminin cəminə bərabər olduğunu yoxlayan isLucky(123321) funksiyasını yazın.
// Bilet uğurlu olarsa, funksiya true, uğursuz olarsa, false qaytarmalıdır.


let userEded = +prompt("eded daxil edin");          //123456

function isLucky(eded) {

    let sonEded = eded % 10;
    eded = Math.floor(eded / 10);
 
    let besinciEded = eded % 10;
    eded = Math.floor(eded / 10);

    let dorduncuEded = eded % 10;
    eded = Math.floor(eded / 10);

    let ucuncuEded = eded % 10;
    eded = Math.floor(eded / 10);

    let ikinciEded = eded % 10;
    eded = Math.floor(eded / 10);

    let birinciEded = eded % 10;
    eded = Math.floor(eded / 10);


  console.log(ucuncuEded + ikinciEded + birinciEded === sonEded + besinciEded + dorduncuEded)

}

isLucky(userEded);

//*************TASK 5 */
// 5.İstifadəçidən tarixi «YYYY.MM.DD» formatında daxil etməyi xahiş edin. Tarixin təsvirini «12 may 2019-cu il» formatında çıxarın. İstifadəçi səhv formatda dəyər daxil edərsə, «Yanlış dəyər daxil edilib» bildirişi göstərin.

const userInput = prompt('Tarixi «YYYY.MM.DD» formatında daxil edin')

const date = new Date(userInput)


const day = date.getDate()
const month = getMonthName(date.getMonth() + 1)
const year = getYearEnding(date.getFullYear())

console.log(`${day} ${month} ${year}`)


function getMonthName(monthNumber) {
    const months = {
        1: "yanvar",
        2: 'fevral',
        3: 'mart',
        4: 'aprel',
        5: 'may',
        6: 'iyun',
    }
    return months[monthNumber]
}
function getYearEnding(year) {
    const lastDigit = year.toString()[3]
    switch (+lastDigit) {
        case 3:
        case 4:
            return `${year}-cü il`
        case 6:
            return `${year}-cı il`
        case 9:
            return `${year}-cu il`
        default:
            return `${year}-ci il` 
    }
}

//*************TASK 6 */
// 6.İstifadəçidən 1 ilə 99 arasında rəqəm daxil etməsini tələb edən və onu mətn şəklində konsola çıxaran numberToText funksiyası tərtib edin.


const ed = prompt("eded daxil edin: ")

console.log(numberToText(ed))

function numberToText(ed) {
    const ilkEded = ed[0]
    const sonEded = ed[1]

    let solTeref = ''
    let sagTeref = ''

    switch (sonEded) {
        case '0':
            sagTeref = ''
            break;
        case '1':
            sagTeref = 'bir'
    }
    switch (ilkEded) {
        case '1':
            solTeref = 'on'
            break;
        case '2':
            solTeref = 'iyirmi'
    }
    return `${solTeref} ${sagTeref}`
}


//*************TASK 7 */
// 7.İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin. Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,
const adSoyad = prompt('ad soyadiniz yazin: AD SOYAD')

const changeFormat = (adSoyad) => {
  let splitted = adSoyad.split(' ')
  return `${splitted[1]} ${splitted[0]}`

}
console.log(changeFormat(adSoyad))





//*************TASK 8 */
// 8.Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın. Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.

// const isvalidNumber = (phoneNumber) => (phoneNumber.length === 11 && phoneNumber.startsWith('+7'))

// console.log(isvalidNumber('+7366666664'))   //true
// console.log(isvalidNumber('+736666666'))    //false
// console.log(isvalidNumber('+9946666666'))   //false
