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

  //Set numberX and numberY
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

  //Set operators value
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

  //Set mathematic operations
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
  // OnOf simulation
  ac.addEventListener('click', function() {
    display.value = null;
    operator = 0;
    numberTemp = [];
  });

  createArrayNumberTemp(numBtns);
  setOperator(operators);
  setResult();


  //Mathematic operations
  adding = (num1, num2) => {
    result = num1 + num2;
    return result;
  }

  subtraction = (num1, num2) => {
    result = num1 - num2;
    return result;
  }

  multiply = (num1, num2) => {
    result = num1 * num2;
    return result;
  }

  divide = (num1, num2) => {
    result = num1 / num2;
    return result;
  }
  sqrt = (num1) => {
    result = Math.sqrt(num1);
    return result;
  }
  percent = (num1, num2) => {
    result = (num1 / 100) * num2;
    return result;
  }
});
