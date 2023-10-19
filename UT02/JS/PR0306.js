function convertBase(str, baseFrom, baseTo){
    let k = 0;
    if(baseFrom != 10){
        for(let i = 1; i <= str.length; i++){
            k = k +(str[i-1] * (Math.pow (8,(str.length-i))));
        } 
    }
    
}
let a = "213";
let k=0;
for(let i = 1; i <= a.length; i++){
    k = k +(a[i-1] * (Math.pow (8,(a.length-i))));
 } 
while(Int(a) > 0){
    k=
}
 //console.log(Math.pow(8, a.length));
 console.log(k);
 //console.log(k);