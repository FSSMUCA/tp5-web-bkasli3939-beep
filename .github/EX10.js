function sommeitrative(n){
    let s=0;
    for(let i=1 ;i<=n ;i++){
        s+=i;
    }
    return s
}

function sommmerecurcive(n){
    if(n===0)return 0;
    returnn+sommmerecurcive(n-1);
}
