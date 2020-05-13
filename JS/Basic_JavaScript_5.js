function my_Function() {
    document.getElementById("Test").innerHTML = 2.7976931348623157E+10308;
}


document.writeln("10" + 5);
document.writeln(10 == 10);
document.writeln(10+3 == 15);
X = "Lori";
Y = "Laurie";
document.writeln(X === Y);
A = 15;
B = 15;
document.writeln(A === B);
C = "15";
D = 15;
document.writeln(C === D);
E = "Lori";
F = "Lori";
document.writeln(E === F);

document.writeln(6 > 3 && 5 > 2);

document.writeln(6 > 3 && 1 > 2);

document.writeln(6 > 3 || 1 > 2);

document.writeln(6 < 3 || 5 < 2);

document.writeln(10<2);

document.writeln(10>2);

console.log(16<4);

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}