var array1 = [1,2,3,4,5,6,7,8,9,10];
var array2 = [1,2,3,4,5];

var result = findSumBetter(array1, 11);
var result2 = findSumBetter(array1, 9);

console.log(result);
console.log(result2);

function findSumBetter(arr, weight){
    var hashtable = {};

    for(let i = 0; i < arr.length; i++){
        let currentElement = arr[i];
        let difference = weight - currentElement;

        if(hashtable[currentElement] != undefined)
        {
            return [i, hashtable[currentElement]];
        }else{
            hashtable[difference] = i;
        }
        console.log(hashtable);
    }
}

// 1,2,3,4,5,6,7,8,9,10
