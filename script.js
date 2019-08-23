document.addEventListener("DOMContentLoaded", function(event) {

  let display = document.querySelector('#display');
  let numBtns = document.querySelectorAll('.operators');
  let operators = document.querySelectorAll('.functional_button');
  let equal = document.querySelector('#result');
  let ac = document.querySelector('#onOf')
  let result;
  let numberTemp = [];
  let operator = 0;
  let numberX;
  let numberY;

  createArrayNumberTemp = (btn) => {
    fn = (element) => {
      element.addEventListener('click', function() {
        if (operator !== 0) {
          numberTemp.push(element.value);
          numberY = parseFloat(numberTemp.join("").toString());
          display.value = numberY;
        } else {
          numberTemp.push(element.value);
          numberX = parseFloat(numberTemp.join("").toString());
          display.value = numberX;
        }
      });
    }
    btn.forEach(fn);
  }

  setOperator = (btn) => {
    fn = (element) => {
      element.addEventListener('click', function() {
        operator = element.value;
        display.value = operator;
        numberTemp = [];
        if (element.value == "C") {
          operator = 0;
          display.value = operator;
          numberTemp = [];
        }
      });
    }
    btn.forEach(fn);
  }

  setResult = () => {
    equal.addEventListener('click', function() {
      switch (operator) {
        case "+":
          {
            result = adding(numberX, numberY);
            display.value = Math.round(result * 100) / 100;
            numberTemp = [];
            operator = [];
            numberX = result;
            break;
          }
        case "-":
          {
            result = subtraction(numberX, numberY);
            display.value = Math.round(result * 100) / 100;
            numberTemp = [];
            operator = [];
            numberX = result;
            break;
          }
        case "*":
          {
            result = multiply(numberX, numberY);
            display.value = Math.round(result * 100) / 100;
            numberTemp = [];
            operator = [];
            numberX = result;
            break;
          }
        case "÷":
          {
            result = divide(numberX, numberY);
            display.value = Math.round(result * 100) / 100;
            numberTemp = [];
            operator = [];
            numberX = result;
            break;
          }
        case "√":
          {
            result = sqrt(numberX);
            display.value = Math.round(result * 100) / 100;
            numberTemp = [];
            operator = [];
            numberX = result;
            break;
          }
        case "%":
          {
            result = percent(numberX, numberY);
            display.value = Math.round(result * 100) / 100;
            numberTemp = [];
            operator = [];
            numberX = result;
            break;
          }
      }
    });
  }
  ac.addEventListener('click', function() {
    display.value = null;
    operator = 0;
    numberTemp = [];
  });

  createArrayNumberTemp(numBtns);
  setOperator(operators);
  setResult();

  adding = (num1, num2) =>  num1 + num2;

  subtraction = (num1, num2) => num1 - num2;

  multiply = (num1, num2) =>  num1 * num2;

  divide = (num1, num2) => num1 / num2;

  sqrt = num1 => Math.sqrt(num1);

  percent = (num1, num2) => (num1 / 100) * num2;
});
