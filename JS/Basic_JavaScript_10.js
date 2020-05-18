function count() {
    var Digit = "";
    var X = 1;
    while (X <= 25) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting").innerHTML = Digit;
}

var text = "";
var i;
for (i =1; i <= 10; i++) {
    if (i===5) {continue;}
    text += i + "<br>";
}
document.getElementById("demo").innerHTML = text;



function array_Function() {
    var Fruit = [];
    Fruit[0] = "red";
    Fruit[1] = "blue";
    Fruit[2] = "yellow";
    Fruit[3] = "orange";
    document.getElementById("Array").innerHTML = "The banana is " + Fruit[2] + ".";
}



let girl = {
    age: 11 ,
    grade: " 6th ", 
    hair: " brown ",
    description : function() {
        return "The girl is an " + this.age + " year old," + this.grade + " grader" + " with" + this.hair + " hair" + ".";
    }
};
document.getElementById("Girl_Object").innerHTML = girl.description();