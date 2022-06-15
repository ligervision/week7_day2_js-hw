// console.log('Hello this is from array methods')

/*
    Array Methods
*/

// Create an array with which to work

let names = ['Frank', 'Alice', 'Michael', 'Kate', 'Johnny', 'Megan'];

// Basic Looping
for (let i = 0; i < names.length; i++){
    console.log(names[i])
}

console.log('==========');

// For...of
for (let name of names){
    console.log(name)
}

// Array.prototype.forEach() -- FOR...EACH

// The forEach() method executes a provided function once for each array element.
// (Array.prototype. is where the methods live)
// callbackFn is called with:
// -- element
// -- index
// -- array
// array1.forEach(element => console.log(element));

console.log('==========');

// 3 arguments called...
function callBack(name, idx, a){
    console.log(name, idx, a)
}

names.forEach(callBack);


// With an arrow function
names.forEach(n => console.log(n));

names.forEach((name, index) => console.log(index + ' - ' + name));


// Array.prototype.map() -- MAP

function mapCallBack(element, index){
    if (index % 2 === 0){
        return element.toUpperCase();
    } else {
        return element.toLowerCase();
    };
};

let newNames = names.map(mapCallBack);
console.log(names);
console.log(newNames);

// As Arrow Function
let newerNames = names.map((e, i) => i%2===0 ? e.toUpperCase() : e.toLowerCase());

// // with nested Ternary
// let age = 10
// let ageGroup = age > 65 ? 'Senior' : age > 18 ? 'Adult' : 'Child'
// console.log(ageGroup)


// Array.prototype.filter() -- FILTER

let cities = ['Chicago', 'Boston', 'Chattanooga', 'Baton Rouge', 'Champaign', 'Denver'];

function startsWithC(cityName){
    return cityName[0].toUpperCase() === 'C'
}
// = is used for assigning values
// == is used for checking equality (allows for type conversion)
// === is used for checking equality (does not allow for type conversion)
console.log(5 === '5');

console.log(cities)

let cNameCitiesMap = cities.map(startsWithC);
console.log(cNameCitiesMap);
let cNameCitiesFilter = cities.filter(startsWithC);
console.log(cNameCitiesFilter);

// Arrow Function
let bNameCities = cities.filter(city => city[0].toUpperCase() === 'B');
console.log(cities);
console.log(bNameCities);


// Array.prototype.concat() -- CONCAT
let arrA = [1, 2, 3];
let arrB = [4, 5, 6];

let arrAB = arrA.concat(arrB);
console.log(arrAB);
console.log(typeof arrAB);

console.log(arrA);
console.log(arrB);
console.log(arrAB);


// Array.prototype.includes() -- INCLUDES
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(colors.includes('purple'));
console.log(colors.includes('green'));


// Array.prototype.indexOf() -- INDEXOF
// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(colors.indexOf('purple'));
console.log(colors.indexOf('green'));


// Array.prototype.join() -- JOIN
let myArrName = ['B', 'r', 'i', 'a', 'n']
console.log(colors.join(''));
console.log(colors.concat('--'));


// Array.prototype.push() -- PUSH
// permanently changes list, adding to the end
console.log(colors.push('pink'));
console.log(colors);


// Array.prototype.pop() -- POP
let lastElement = colors.pop();
console.log(lastElement);
console.log(colors);


// Array.prototype.reverse() -- REVERSE
colors.reverse();
console.log(colors);
colors.reverse();
console.log(colors);


// Array.prototype.slice() -- SLICE
console.log('Array Slice:');
console.log(colors);
console.log(colors.slice());
console.log(colors.slice(2,5));


// Array.prototype.splice() -- SPLICE

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)
console.log('Array Splice:')
console.log(colors);
colors.splice(2, 1, 'pink', 'purple');
console.log(colors);


// Array.prototype.sort() -- SORT
/*
The sort() method sorts the elements of an array in place and returns the sorted array.
The default sort order is ascending, built upon converting the elements into strings,
then comparing their sequences of UTF-16 code units values.

compareFunction(a, b) return value	sort order
> 0	    sort a after b
< 0	    sort a before b
=== 0	keep original order of a and b

*/

console.log('Sort!');
let unsortedArr = [23, 10, -10, 3, 5, -7]

function compareFunc(a, b){
    console.log('A:', a, 'B:', b);
    if (a > b){
        return 1
    } else if (a < b){
        return -1
    } else {
        return 0
    }
}

console.log(unsortedArr);
unsortedArr.sort(compareFunc);
console.log(unsortedArr);

let newUnsort = [3, 77, 34, -23, 35, 1, 11]

console.log(newUnsort);
newUnsort.sort((a,b) => a-b);
console.log(newUnsort);
