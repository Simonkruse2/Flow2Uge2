let names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

namesFiltered = names.filter(function (name) {
	return name.includes("a");
});

console.log(namesFiltered);

let namesReversed = names.map(function (nams) {
	return nams.split("").reverse().join("");
});
console.log(namesReversed);


/*
Now, assume the array did not offer these two methods. Then we would have to implement them by our self. 
a) Implement a function: myFilter(array, callback)that takes an array as the first argument, and a callback 
as the second and returns a new (filtered) array according to the code provided in the callback 
(this method should provide the same behaviour as the original filter method).
Test the method with the same array and callback as in the example with the original filter method.
*/

function myFilter(array, callback) {
	var filteredNames = [];
	for (let index = 0; index < array.length; index++) {
		if (callback(array[index], index, array)) filteredNames.push(array[index])

	}
	return filteredNames;
}

console.log(myFilter(names, namesFiltered))








function myFilter(array, callback) {
	return array.
}