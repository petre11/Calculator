document.addEventListener("DOMContentLoaded", function(event) {

let display = document.querySelector('#display');
let numBtns = document.querySelectorAll('.operators');
let operators = document.querySelectorAll('.functional_button');
let equal = document.querySelector('#result');
let result;
let numberTemp =[];
let operator = 0;
let numberX;
let numberY;

//Set numberX and numberY
function createArrayNumberTemp(btn){
  function fn(element){
    element.addEventListener('click',function(){
      if(operator !== 0 ){
        numberTemp.push(element.value);
        numberY = parseInt(numberTemp.join("").toString());
        display.value = numberY
      }
      else{
        numberTemp.push(element.value);
        numberX = parseInt(numberTemp.join("").toString());
        display.value = numberX
      }
    });
  }
  btn.forEach(fn);
}

//Set operators value
function setOperator (btn){
  function fn(element){
    element.addEventListener('click',function(){
      operator = element.value;
      display.value = operator;
      numberTemp =[];
    });
  }
  btn.forEach(fn);
}

//Set mathematic operations
function setResult(){
    equal.addEventListener('click',function(){
      if(operator == "+"){
        result = adding(numberX,numberY);
        display.value = result;
        numberTemp =[];
        operator =[];
        numberX = result;
      }
      if(operator == "-"){
        result = subtraction(numberX,numberY);
        display.value = result;
        numberTemp =[];
        operator =[];
        numberX = result;
      }
      if(operator == "*"){
        result = multiply(numberX,numberY)
        display.value = result;
        numberTemp =[];
        operator =[];
        numberX = result;
      }
      if(operator == "/"){
        result = divide(numberX,numberY)
        display.value = result;
        numberTemp =[];
        operator =[];
        numberX = result;
      }
    });
}
createArrayNumberTemp (numBtns);
setOperator(operators);
setResult();

//Mathematic operations
function adding(num1,num2){
  result = num1 + num2
  return result;
}
function subtraction(num1,num2){
  result = num1 - num2
  return result;
}
function multiply(num1,num2){
  result = num1 * num2
  return result;
}
function divide(num1,num2){
  result = num1 / num2
  return result;
}

});
