function teoremaDesigualdadTriangular(a, b, c){
    return (a + b > c && a + c > b && b + c > a);
}

console.log(teoremaDesigualdadTriangular(3, 4, 3));