function removeVowls(str){
    return str.replace(/[aeiou]/gi, '');
}
let a = 'Hola soy Luis';
console.log(removeVowls(a));