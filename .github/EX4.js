let min=Number(prompt("entrer le nombre minimal"));
let max=Number(prompt("entrer le nombre maximal"));
for(let i=min;i<=max;i++){
    if(i%3===0 && i%5===0){
        console.log(i+"=five&three");
    }else if (i%3===0){
        console.log(i+"tree")
    }else if(i%5===0){
        console.log(i+"=five")
    }else{
        console.log(i)
    }
}