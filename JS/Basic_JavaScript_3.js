function addition_function() {
    var addition = 2 + 2;
    document.getElementById("Add").innerHTML = "2 + 2 = " + addition;
}

function subtraction_function() {
    var subtraction = 5-2;
    document.getElementById("Subt").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication_function() {
    var multiplication = 5 * 2;
    document.getElementById("Mult").innerHTML = "5 * 2 = " + multiplication;
}

function division_function() {
    var division = 6 / 2;
    document.getElementById("Div").innerHTML = "6 / 2 = " + division;
}

function simple_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var easy_Math = 25 % 6;
    document.getElementById("Math2").innerHTML = "When you divide 25 by 6 you have a remainder of: " + easy_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Negation").innerHTML = -x;
}

function increment() {
    var X = 5;
    X++;
    document.getElementById("Increment").innerHTML = X;
}

function decrement() {
    var X = 5;
    X--;
    document.getElementById("Decrement").innerHTML = X;
}
function random() {
    alert(Math.floor(Math.random() * 200) + 1);
}