function factorille(n){
    if (n===0) return 1;
    return n*factorille(n-1);
}
console.log(factorille(5));