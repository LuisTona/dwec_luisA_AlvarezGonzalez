let combineArr = (arr1, arr2) => arr1.concat(arr2);
//funcion hecha antes de saber de concat
/*function combineArr(arr1, arr2){
    let i = arr1;
    arr2.forEach(function(item){
        i.push(item);
    })
    return i;
}*/
a = [1,2,3];
b = [4,5,6]
console.log(combineArr(a,b));