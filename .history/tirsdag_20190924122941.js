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
	return array.split("").reverse().join("");
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
		if (callback(array[i], i, array))
			filteredNames.push(array[i]);
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
		if (callback(array[i], i, array))
		mappedNames.shift(array[i]);
	}
	return mappedNames;
}
console.log(myMap(names,namesMappedFunction));