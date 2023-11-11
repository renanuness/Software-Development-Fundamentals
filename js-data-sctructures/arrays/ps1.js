var array1 = ['all', 'cows', 'are', 'big'];
var array2 = [1,2,3,4,5,6,7,8];

for (var index in array1) {
    console.log(index);
    console.log(array1[index]);
}
console.log("\n");

for (var element of array1)
    console.log(element);

console.log("\n");

array1.forEach((element, index, test) => {
    console.log(`${index}:${element}`);
    console.log(test);
});


array2.forEach((element, index, array) =>{
    console.log(`${element}:${index}`);
    console.log(array);
})

console.log("Helper Functions");

console.log(array1);
console.log(array2);

var slice12 = array1.slice(1,2); // Começa no 1 e para antes do dois
console.log(slice12);
console.log(array1);

console.log("---------------------");
var slice122 = array2.slice(0,3); // Começa no 0 e termina no 3
console.log(slice122);
console.log(array2);

console.log("------------------------");

var referenceArray1 = array1;

// This change both arrays because js arrays are memory based.
referenceArray1[1] = "horses";

console.log(referenceArray1);
console.log(array1);

var copyArray1 = Array.from(array1);

// Spread operator
array2.push(7,8,9);
addNumber(...array1);
addNumber(...array2);

function addNumber(a, b, c, d){
    console.log(a + b + c + d);
}
