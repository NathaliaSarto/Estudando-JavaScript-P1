const listaDestinos = new Array(
    `Salvador`,
    `Trancoso`,
    `Maceió`
);

console.log("Destinos Possíveis: ");
console.log(listaDestinos);

listaDestinos.splice(1, 1);
console.log(listaDestinos);
console.log(listaDestinos[0], listaDestinos[1]);

const idadeComprador = 19;
const estaAcompanhada = false;
const comprouPassagem = true;

console.log("Destinos possíveis:");
console.log(listaDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDestinos.splice(1, 1);
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado");
//     listaDestinos.splice(1, 1);
// } else {
//     console.log("Comprador não é maior de idade");
// }

if (idadeComprador >= 18 || estaAcompanhada==true ){
    console.log("Boa viagem!");
    listaDestinos.splice(2, 1);
} else {
    console.log("não posso vender");
}


console.log ("EMBARQUE: \n\n")
if(idadeComprador>=18 && comprouPassagem){
    console.log("Boa viageeeem");
}else{
    console.log("Vaza, fia")
}


console.log(listaDestinos);

