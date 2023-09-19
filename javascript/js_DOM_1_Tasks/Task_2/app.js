/* Bir input yaradin. Hemin input-a 10px ile 100px araliginda bir deyer yaza bilim ve goster button-una clickleyenden sonra yazdigim deyer, asagida olan cevrenin width ve height-i olsun.
Ve en asagida yazilan sahede  bu cevrenin olcusu haqqinda melumatlar verilsin. Sahesi uzunlugu ve s. 
pi = 3 goturun. ya da Math.PI ile isleyin. 

Dustur: cevrenin uzunlugu: 2*pi*r
Cevrenin sahesi: pi*r*r */


// input , button, circle
const button = document.querySelector("button");
const circle = document.querySelector(".circle");
const input = document.querySelector("input");

//cevre haqqinda melumat
const uzunluq = document.querySelector(".uzunluq");
const sahe = document.querySelector(".sahe");

//function
const showWithandHeight = () => {
  const inputValue = `${input.value}px`;
  circle.style.width = inputValue;
  circle.style.height = inputValue;
  circle.style.backgroundColor = "#ddd";

  //cevrenin radiusu
  let parsedInputValue = parseFloat(inputValue);
  let radius = parsedInputValue / 2;
  const p = 3;

  //cevrenin uzunlugu
  uzunluq.innerText = `Cevrenin uzunlugu: ${2 * p * radius}`;
  sahe.textContent = `Cevrenin Sahesi: ${2 * radius * radius}`;
};
