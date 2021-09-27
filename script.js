function add() {
    var a = parseInt(document.getElementById('number1').value);
    var b = parseInt(document.getElementById('number2').value);
    document.getElementById('result').value = a + b;



}

function sub() {
    var a = parseInt(document.getElementById('number1').value);
    var b = parseInt(document.getElementById('number2').value);
    document.getElementById('result').value = a - b;


}

function mul() {
    var a = parseInt(document.getElementById('number1').value);
    var b = parseInt(document.getElementById('number2').value);
    document.getElementById('result').value = a * b;


}

function div() {
    var a = parseInt(document.getElementById('number1').value);
    var b = parseInt(document.getElementById('number2').value);
    document.getElementById('result').value = a / b;


}

function mod() {
    var a = parseInt(document.getElementById('number1').value);
    var b = parseInt(document.getElementById('number2').value);
    document.getElementById('result').value = a % b;


}