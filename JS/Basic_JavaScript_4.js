function my_Dictionary() {
    var Fruit = {
        Strawberry:"Red",
        Banana:"Yellow",
        Blueberry:"Blue",
        Lime:"Green",
        Grape:"Purple!"
    };
    delete Fruit.Grape;
    document.getElementById("Dictionary").innerHTML = Fruit.Lime;
}