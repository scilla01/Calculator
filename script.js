function appendValue(value) {
 document.getElementById("output").value += value;
}

//let divide = document.getElementById("btnDivide").value
function calculate(){
    let calculation = document.getElementById("output").value;
    let result = eval(calculation);
    document.getElementById("output").value = result;
}

