let max = (arr)=>{let maxim = -Infinity; arr.reduce(function(acum,item){
                    if(maxim < item){maxim = item}});return maxim} 
// function max(arr){
//     let max = -Infinity;
//     arr.reduce(function(acum, item){
//         if(max < item){
//             max = item;
//         }   
//     })
//     return max;
// }
a = [1,2,3,4,5,6,7,18,9,0]
console.log(max(a));