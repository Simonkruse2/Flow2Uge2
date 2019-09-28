var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

/*
namesFiltered = names.filter(function (name) {
	return name.includes("a");
});
*/
function namesFilteredFunction(array) {
  return array.includes("a");
}
/*
console.log(namesFiltered(names));
*/
/*
var namesReversed = names.map(function (nams) {
	return nams.split("").reverse().join("");
});
console.log(namesReversed);
*/

function namesMappedFunction(array) {
  return array
    .split("")
    .reverse()
    .join("");
}

/*
Now, assume the array did not offer these two methods. Then we would have to implement them by our self. 
a) Implement a function: myFilter(array, callback)that takes an array as the first argument, and a callback 
as the second and returns a new (filtered) array according to the code provided in the callback 
(this method should provide the same behaviour as the original filter method).
Test the method with the same array and callback as in the example with the original filter method.
*/

function myFilter(array, callback) {
  var filteredNames = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) filteredNames.push(array[i]);
  }
  return filteredNames;
}
var useMyFilter = myFilter(names, namesFilteredFunction);

console.log(useMyFilter);

/*
b) Implement a function: myMap(array, callback)that, provided an array and a callback, 
provides the same functionality as calling the existing map method on an array.
Test the method with the same array and callback as in the example with the original map method.
*/

function myMap(array, callback) {
  var mappedNames = [];
  for (let i = 0; i < array.length; i++) {
    mappedNames.push(callback(array[i], i, array));
  }
  return mappedNames;
}
console.log(myMap(names, namesMappedFunction));

/*
3)      Using the Prototype property to add new functionality to existing objects
Every JavaScript function has a prototype property (this property is empty by default), 
and you can attach properties and methods on this prototype property. You add methods and 
properties on an object’s prototype property to make those methods and properties available 
to all instances of that Object. You can even implement (classless) inheritance hierarchies 
with this property. The problem with our two user defined functions above (myFilter and myMap) 
is that they are not really attached to the Array Object. They are just functions, where we have 
to pass in both the array and the callback. Create a new version of the two functions (without the array argument)
 which you should add to the Array prototype property so they can be called on any array as sketched below:
var names = ["Lars", "Peter", "Jan", "Bo"];
var newArray = names.myFilter(function(name) {…});

*/

var namesHomemade = ["Lars", "Peter", "Jan", "Bo"];

Array.prototype.filterHomemade = function(callback) {
  var filteredNames = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) filteredNames.push(this[i]);
  }
  return filteredNames;
};

var newFilterArr = namesHomemade.filterHomemade(namesFilteredFunction);
console.log(newFilterArr);

Array.prototype.mapHomemade = function(callback) {
  var mappedNames = [];
  for (let i = 0; i < this.length; i++) {
    mappedNames.push(callback(this[i], i, this));
  }
  return mappedNames;
};
var newMapArr = namesHomemade.mapHomemade(namesMappedFunction);
console.log(newMapArr);

/*

4) Getting really comfortable with filter and map
a) Given this array: var numbers = [1, 3, 5, 10, 11];
Use map + a sufficient callback to map numbers into this array:
var result = [4,8,15,21,11];
Hints: The map() callback can take me additional arguments, see here

*/
var numbers = [1, 3, 5, 10, 11];

function addNumbers(num1, num2) {
  return num1 + num2;
}

function numberLine(array, callback) {
  var result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}
console.log(numberLine(numbers, addNumbers));

/*
b) Use map() to create the <a>’s for a navigation set and eventually a string like below (use join() to get the string of <a>’s):
<nav>
  <a href=””>Lars</a>
  <a href=””>Peter</a>
  <a href=””>Jan</a>
  <a href=””>Bo</a>
</nav>
 
*/
function addHtml(array) {
  return array.join("<a>" +  "</a>");
}
console.log(addHtml(names));
