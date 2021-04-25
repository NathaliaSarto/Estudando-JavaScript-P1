const listaDestinos = new Array(
    `Salvador`,
    `Trancoso`,
    `Maceió`
);


const idadeComprador = 19;
const estaAcompanhada = false;
let comprouPassagem = false;
const destino = "Paris";

console.log("\nDestinos Possíveis: ");
console.log(listaDestinos);


const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true);

let contador = 0;
let destinoExiste = false;

// while (contador < 3) {

//     if (listaDestinos[contador] == destino) {
//         //console.log("Destino é real")
//         destinoExiste = true;
//         break;
//     }
//     //if(contador ==2 && !destinoExiste){
//     //     console.log("Destino não é real")
//     // }
//     contador += 1;
// }



for (let cont = 0; cont < 3; cont++) {
    if (listaDestinos[contador] == destino) {
        //console.log("Destino é real")
        destinoExiste = true;
        break;
    }
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagemmm")
} else {
    console.log("Sorry, honey")
}


// console.log ("EMBARQUE: \n\n")
// if(idadeComprador>=18 && comprouPassagem){
//     console.log("Boa viageeeem");
// }else{
//     console.log("Vaza, fia")
// }


// console.log(listaDestinos);
