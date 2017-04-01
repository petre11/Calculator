// var array = [1,2,3];
// console.log(Number(array[1]));

console.log("hello liczydło");
document.addEventListener("DOMContentLoaded", function(event) {

    var numbers = document.querySelectorAll('.numbers');
    var display = document.querySelector('#display');
    var clear = document.querySelector('#clear');
    var wynik =document.querySelector('#result');
    var memory = [];
    var suma = 0;
    var operator;


    for (var i = 0; i < numbers.length; i++) {
        numbers   [i].addEventListener('click', function() {
              memory.push(this.getAttribute('value'));
                display.innerHTML = memory.join("");
                console.log(memory);
        });

    }

    wynik.addEventListener('click', function() {
      for (var j = 0; j < memory.length; j++) {
        var suma = 0;
        if(memory.indexOf("+", 1) != -1){
          suma = suma + memory[j];
          console.log(suma);
        }

    }
      operator = memory.indexOf("+");
      memory.splice(operator);
      display.innerHTML = suma;
    });

//czyszczenie ekranu
    clear.addEventListener('click', function() {
        display.innerHTML = "";
        memory.length = 0;
    });

});
