console.log("hello liczydło");
document.addEventListener("DOMContentLoaded", function(event) {

    var operators = document.querySelectorAll('.operators');
    var display = document.querySelector('#display');
    var clear = document.querySelector('#clear');
    var equalTo = document.querySelector('#result');
    var ac = document.querySelector('#onOf');
    var memory = "";
    var result ="";

    for (var i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', function() {
           memory += this.value;
            display.value = memory;
        });
}
        equalTo.addEventListener('click', function() {
            display.value = memory;
            result = eval(memory);
            display.value = result;
            memory = result;

            if(display.value ==Infinity){
              display.value = "Error!";
              memory ="";
            }//divided by 0
        });//display result

//clear display
    clear.addEventListener('click', function() {
        memory ="";
        document.querySelector('#displayForm').reset();
    });
//On - Of
    ac.addEventListener('click', function() {
        if(display.value!=""){
          display.value="";
        }
        else{
          display.value="0";
        }
    });

});
