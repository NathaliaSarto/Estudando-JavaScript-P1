const listaDestinos = new Array(
    `Salvador`,
    `Trancoso`,
    `Maceió`
);


const idadeComprador = 19;
const estaAcompanhada = false;
let comprouPassagem = false;
const destino = "Salvador";

console.log("\nDestinos Possíveis: ");
console.log(listaDestinos);


const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true);

let contador = 0;
while (contador < 3) {
    if (listaDestinos[contador] == destino){
        console.log("Destino é real")
    } else {
        console.log("Destino não é real")
    }
    contador += 1;
}


// console.log ("EMBARQUE: \n\n")
// if(idadeComprador>=18 && comprouPassagem){
//     console.log("Boa viageeeem");
// }else{
//     console.log("Vaza, fia")
// }


// console.log(listaDestinos);
