// olhar todo um array e adicionar no hashtable
// se o i é diferente de 0, testar se ele é diferente do ultimo
var hastable = {};
var arrays = [[1 ,2 ,3,5],[1 ,2 ,3 ,4 ,5],[1 ,2 ,5], [1,2,5]];
lookArrays(arrays);
printRepeated(arrays.length);

function countElementsArray(array){
    for(let i = 0; i < array.length; i++){
        let element = array[i];
        if(i!= 0){
            if(element == array[i-1]){
                continue;
            }
        }

        if(hastable[element] == undefined){
            hastable[element] = 1;
        }else{
            hastable[element]++;
        }
    }
}

function lookArrays(kArrays){
    for(let i = 0; i < kArrays.length; i++){
        countElementsArray(kArrays[i]);
    }
}

function printRepeated(numberOfArrays){
    console.log(hastable);
    let repeated = [];
    for(let key in hastable){
        if(hastable[key] == numberOfArrays){
            repeated.push(key);
        }
    }

    console.log(repeated);
}