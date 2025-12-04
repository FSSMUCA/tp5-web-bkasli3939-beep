function totalavecremise(total,remise){
    return total - (total * remise/100);
}
let totalHT=Number(prompt("entrer le total HT:"));
let remise=Number(prompt("entrer la remise(%):"));
let totalfinal=totalavecremise(totalHT,remise);
console.log("total aprés remise"+totalfinal)