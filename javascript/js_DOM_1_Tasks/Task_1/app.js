/* ədəd button olsun. Hansına clickləsəm bodynin rəngi o rəngdə olsun. 
elementi querySelector ile alin. Ve onun onclick propertysinden istifade edin. onClick property-si bir funksiya alir */

const body = document.querySelector("body");
const Buttons = document.querySelectorAll("button");

const changeColor = (color) => {
  switch (color) {
    case "gray":
      body.style.backgroundColor = "rgb(111, 105, 105)";
      break;
    case "red":
      body.style.backgroundColor = "rgb(116, 39, 39)";
      break;
    case "blue":
      body.style.backgroundColor = "rgb(40, 40, 177)";
      break;
    case "yellow":
      body.style.backgroundColor = "rgb(98, 98, 16)";
      break;
    default:
      body.style.backgroundColor = "rgb(98, 98, 16)";
  }
};

