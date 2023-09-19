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
