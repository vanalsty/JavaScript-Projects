function concatMethod() {
    var str1 = "What's ";
    var str2 = "up?";
    var res = str1.concat(str2);
    document.getElementById("example").innerHTML = res;
  }

function slice_Method() {
    var Sentence = "Click below and it will give you the slice of this sentence.";
    var Section = Sentence.slice(37,42);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {
    var X = 6;
    document.getElementById("Numbers_to_string").innerHTML = X.toString(2);
}

function precision_Method() {
    var X =4432.455;
    document.getElementById("Precision").innerHTML = X.toPrecision(5);
}

