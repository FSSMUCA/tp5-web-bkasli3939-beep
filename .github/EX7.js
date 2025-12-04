function verifiermotpasse(mdp){
    if(mdp.length>=8 && mdp.include("@")){
        return true
    }
    return false
}
let mot=prompt("entrer un mot de passe:");
if(verifiermotpasse(mot)){
    console.log("mot de passe valide");
} else{
    console.log("mot de passe non valide");
}