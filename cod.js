var numbers = Array.from(document.getElementsByClassName("number"));
var operators = Array.from(document.getElementsByClassName("operator"));
var equal = document.getElementById("equal");
var clear = document.getElementById("clear");
var negateKey = document.getElementById("negate");
var backspace = document.getElementById("backspace");
var display = document.getElementById("display");

var operation = 0;

numbers.map(number => {
    number.onclick = ()=>{
        if(operation==0){
            operation = number.textContent;
        }else{
            operation += number.textContent;
        }
        updateDisplay();
    }
})


backspace.onclick = function(){
    operation = operation.toString().slice(0,-1);
    updateDisplay();

}

operators.map(operator => {
    operator.onclick = ()=>{
        operation += operator.textContent;
        updateDisplay();
    }
})

equal.onclick = function() {
    operation = eval(operation)
    updateDisplay();
}

clear.onclick = function() {
    operation = 0
    updateDisplay();
}

negateKey.onclick = function() {
    operation = negate(operation)
    updateDisplay();
}


function negate(value){
    return value*(-1);
}


function updateDisplay(){
    display.textContent = operation;
}