var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

document.write("<br>");
document.write("<br>");

function Add_numbers_3() {
    var Y = 50;
    document.write(20 + Y + "<br>");
}
function Add_numbers_4() {
    document.write(Y + 100);
}
Add_numbers_3();
Add_numbers_4();


function Favorite_Function() {
    Animal = document.getElementById("Animal").value;
    if (Animal==="dog" || Animal==="Dog" || Animal==="dogs" || Animal==="Dogs") {
        Favorite = "Awesome!  Dogs are the best!";
    }
    else {
        Favorite = "Those are ok, but dogs are the best!";
    }
    document.getElementById("Favorite_Animal?").innerHTML = Favorite;
}

function get_Date() {
    if (new Date().getHours() >22) {
        document.getElementById("Greeting").innerHTML = "It's time for you to go to bed!";
    }
    else {
        document.getElementById("Greeting").innerHTML = "Hope you're having a good day!  It's not time to sleep."
    }
}