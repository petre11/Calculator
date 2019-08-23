import { app } from "./web_modules/hyperapp.js";
import { html } from "./shared/html.js";

const state = {};

const buttons = [
    ['AC', 'C', '√', '%'],
    ['7', '8', '9', '÷'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+']
];

const ButtonRow = buttonValue => html`
  <div class="buttons">
    <button class="button special_button" id="onOf">${buttonValue[0]}</button>
    <button class="button functional_button " value="C">${buttonValue[1]}</button>
    <button class="button  functional_button" value="√">${buttonValue[2]}</button>
    <button class="button  functional_button" value="%">${buttonValue[3]}</button>
  </div>
`;

const CalculatorView = () => html`
  <div class="calculator">
    <div class="logo">CASIO</div>
    <form id="displayForm">
      <input type="text" class="display" id="display" value="0" disabled />
    </form>
    ${buttons.map(ButtonRow)}
  </div>
`;

export const withLayout = page => state => html`
  <div>
    ${layout(state)} ${page(state)}
  </div>
`;

app({
  init: () => state,
  view: CalculatorView,
  node: document.getElementById("app")
});
//
// document.addEventListener("DOMContentLoaded", function(event) {
//   let display = document.querySelector("#display");
//   let numBtns = document.querySelectorAll(".operators");
//   let operators = document.querySelectorAll(".functional_button");
//   let equal = document.querySelector("#result");
//   let ac = document.querySelector("#onOf");
//   let result;
//   let numberTemp = [];
//   let operator = 0;
//   let numberX;
//   let numberY;
//
//   createArrayNumberTemp = btn => {
//     fn = element => {
//       element.addEventListener("click", function() {
//         if (operator !== 0) {
//           numberTemp.push(element.value);
//           numberY = parseFloat(numberTemp.join("").toString());
//           display.value = numberY;
//         } else {
//           numberTemp.push(element.value);
//           numberX = parseFloat(numberTemp.join("").toString());
//           display.value = numberX;
//         }
//       });
//     };
//     btn.forEach(fn);
//   };
//
//   setOperator = btn => {
//     fn = element => {
//       element.addEventListener("click", function() {
//         operator = element.value;
//         display.value = operator;
//         numberTemp = [];
//         if (element.value == "C") {
//           operator = 0;
//           display.value = operator;
//           numberTemp = [];
//         }
//       });
//     };
//     btn.forEach(fn);
//   };
//
//   setResult = () => {
//     equal.addEventListener("click", function() {
//       switch (operator) {
//         case "+": {
//           result = adding(numberX, numberY);
//           display.value = Math.round(result * 100) / 100;
//           numberTemp = [];
//           operator = [];
//           numberX = result;
//           break;
//         }
//         case "-": {
//           result = subtraction(numberX, numberY);
//           display.value = Math.round(result * 100) / 100;
//           numberTemp = [];
//           operator = [];
//           numberX = result;
//           break;
//         }
//         case "*": {
//           result = multiply(numberX, numberY);
//           display.value = Math.round(result * 100) / 100;
//           numberTemp = [];
//           operator = [];
//           numberX = result;
//           break;
//         }
//         case "÷": {
//           result = divide(numberX, numberY);
//           display.value = Math.round(result * 100) / 100;
//           numberTemp = [];
//           operator = [];
//           numberX = result;
//           break;
//         }
//         case "√": {
//           result = sqrt(numberX);
//           display.value = Math.round(result * 100) / 100;
//           numberTemp = [];
//           operator = [];
//           numberX = result;
//           break;
//         }
//         case "%": {
//           result = percent(numberX, numberY);
//           display.value = Math.round(result * 100) / 100;
//           numberTemp = [];
//           operator = [];
//           numberX = result;
//           break;
//         }
//       }
//     });
//   };
//   ac.addEventListener("click", function() {
//     display.value = null;
//     operator = 0;
//     numberTemp = [];
//   });
//
//   createArrayNumberTemp(numBtns);
//   setOperator(operators);
//   setResult();
//
//   adding = (num1, num2) => num1 + num2;
//
//   subtraction = (num1, num2) => num1 - num2;
//
//   multiply = (num1, num2) => num1 * num2;
//
//   divide = (num1, num2) => num1 / num2;
//
//   sqrt = num1 => Math.sqrt(num1);
//
//   percent = (num1, num2) => (num1 / 100) * num2;
// });
