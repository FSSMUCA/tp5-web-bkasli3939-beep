let sommepair=0;
let sommeimpair=0;
for (let i=1;i<=50;i++){
    if(i%2===0){
        sommepair+=i;
    }else{
        sommeimpair+=i;
    }
}
console.log("somme des pairs="+sommepair);
console.log("somme des impairs="+sommeimpair);