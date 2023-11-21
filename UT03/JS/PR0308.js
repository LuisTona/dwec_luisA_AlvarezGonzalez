function countLetters(str){
    str = str.split(' ');
    return str.join('').split('').length;
}
let a = 'Hola soy Luis';
console.log(countLetters(a));