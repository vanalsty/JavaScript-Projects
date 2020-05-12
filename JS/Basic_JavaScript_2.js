function My_First_Function() {
    var str1 = 4;
    var str2 = 8;
    var mult = str1 * str2;
    document.getElementById("multiply").innerHTML = mult;
 }
 function My_Second_Function() {
    var str1 = 4;
    var str2 = 8;
    var add = str1 + str2;   
    document.getElementById("addition").innerHTML = add;
 }

 function My_Third_Function() {
    var str1 = 4;
    var str2 = 8;
    var sub = str2 - str1;   
    document.getElementById("subtraction").innerHTML = sub;
 }

 function My_Fourth_Function() {
    var str1 = 4;
    var str2 = 8;
    var div = str2 / str1;  
    document.getElementById("division").innerHTML = div;
 }

 function myFunction() {
   var sentence = "I am learning";
   sentence += " a lot from this book";
   document.getElementById("Concatenate").innerHTML = sentence;
}