function Drive_Function() {
    var Age, Can_drive;
    Age = document.getElementById("Age").value;
    Can_drive = (Age < 16) ? "You are too young":"You are old enough";
    document.getElementById("Drive").innerHTML = Can_drive + " to drive.";
}

function Child(Age, Gender, Hair, Sport) {
    this.Child_Age = Age;
    this.Child_Gender = Gender;
    this.Child_Hair = Hair;
    this.Child_Sport = Sport;

}
var Sarah = new Child(12, "girl", "brown", "Volleyball");
var Kristin = new Child(10, "girl", "red", "Hockey");
var Ben = new Child(13, "boy", "blonde", "Basketball");
function myFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Ben is a " + Ben.Child_Age + " year-old " + Ben.Child_Gender +
    " with " + Ben.Child_Hair + " hair who loves to play " + Ben.Child_Sport + ".";
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 88;
        function Plus_one() {Starting_point +=-8;}
        Plus_one();
        return Starting_point;
    }
}
