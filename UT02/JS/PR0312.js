function isEqualArr(arr1, arr2){
    if(arr1.length < arr2.length || arr1.length > arr2.length){
        return false;
    }
    let i = true;
    arr1.forEach(function(item, index){
        if(arr2[index] != item){
            i = false;    
        }        
    })
    
    return false;    
}
a = [1, 2, 3,];
b = [1,2,]
console.log(isEqualArr(a, b));