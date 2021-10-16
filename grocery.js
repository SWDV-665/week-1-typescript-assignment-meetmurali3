var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, itemNotes) {
        this.name = name;
        this.quantity = quantity;
        this.itemNotes = itemNotes;
    }
    return Grocery;
}());
var groceryList = [new Grocery("Chicken", 2, "2 birds")];
groceryList.push(new Grocery("Apples", 10, "buy red delicious only"));
groceryList.push(new Grocery("Tomatoes", 20, "plum variety"));
groceryList.push(new Grocery("Avocadoes", 12, "not too ripe ones"));
groceryList.push(new Grocery("Bananas", 12, "buy organic only"));
groceryList.push(new Grocery("Milk", 2, "2 gallons jugs"));
groceryList.push(new Grocery("Potatoes", 20, "big size"));
groceryList.push(new Grocery("Watermelon", 1, "big size"));
groceryList.push(new Grocery("Spinach", 1, "baby spinach"));
groceryList.push(new Grocery("Beans", 1, "buy small packet that is available"));
var listTodisplay = " Grocery List <br> <br>";
groceryList.forEach(function (element) {
    return listTodisplay = listTodisplay + element.name + " - " + element.quantity + " - " + element.itemNotes + "<br>";
});
document.body.innerHTML = listTodisplay;
