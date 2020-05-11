alert("This page will tell you the current year and current date/time.");  //pop up that tell's user what page will do
function My_First_Function() {
    var str1 ="The current year is  "; //assigns "the current year is" as str1
    var str2 = new Date().getFullYear(); //assigns the current year as str2
    var res = str1.concat(str2);  //puts together str1 and str2
    var res = res.fontcolor("red"); //assigns font color to this function
    document.getElementById("Red_Text").innerHTML = res;
}
document.write(Date()); //displays the current date
