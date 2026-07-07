function Dog (name, breed, age, weightinKgs) {
// this = {}; (this line is implied when you use the new keyword)
this.name = name;
this.breed = breed;
this.age =  age;
this.weightinKgs = weightinKgs;
// Adding methods to the object
this.eat =function () {
console.log("Chomp");
};
this.bark = function () {
consoleolog("Woof!");
};
// return this; (this line is also implied with the new keyword)
}
const dogTheMarley = new Dog("Marley", "Pit", 3, 30);
console.log(dogTheMarley);
