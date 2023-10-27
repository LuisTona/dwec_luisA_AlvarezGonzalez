let createPow = (arr, pow) => arr.map(num => Math.pow(num, pow))
// function createPow(arr, pow) {
//     let pows =[];
//     arr.forEach(function(item, index){
//         pows[index] = Math.pow(item, pow)
//     })
//     return pows;
// }
console.log(createPow([1,2,3,4,5], 2));