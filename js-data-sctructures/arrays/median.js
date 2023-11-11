
let pos = 3;
var  evenOffset =  pos % 2 == 0 ? 1 : 0 ,
offsetMinus = Math .floor(pos / 2 ) -  evenOffset,
offsetPlus = Math .floor(pos / 2 ) +  evenOffset;

console.log(offsetMinus);
console.log(offsetPlus);

var arrayEven = [1,2,3];
var arrayOdd = [1,2,3];

console.log(arrayEven.slice(offsetMinus));
console.log(arrayOdd.slice(offsetMinus));

return;

console.log(medianOfArray(arrayEven));
console.log(medianOfArray(arrayOdd));

function medianOfArray(array) {
    let isEven = array.length % 2 == 0;
    let half = isEven ? (array.length /2)-1 :Math.floor(array.length /2);
    if(isEven){ // se ele for par tem que pegar os dois do meio
        return (array[half] + array[half+1])/2;
    }else{
        return (array[half])/2;
    }
}

function main(array1, array2){
    let median1 = medianOfArray(array1);
    let median2 = medianOfArray(array2);

    if(median1 > median2){
        let upperHalf = array2.slice(Math.floor(array2.length/2));
        main(upperHalf, array1);
    }else if(median2 > median1){
        let upperHalf = array1.slice(Math.flor(array1.length/2));
        main(upperHalf, array2);
    }
}