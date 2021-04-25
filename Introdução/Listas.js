// const salvador = `Salvador`;
// const trancoso = `Trancoso`;
// const maceió = `Maceió`;

// console.log("Destinos Possíveis: ");
// console.log(salvador, trancoso, maceió);

const listaDestinos = new Array(
    `Salvador`,
    `Trancoso`,
    `Maceió`
);

listaDestinos.push(`Curitiba`) //adicionano itens na lista
console.log("Destinos Possíveis: ");
console.log(listaDestinos);

listaDestinos.splice(2,1);
console.log(listaDestinos);
console.log(listaDestinos[0], listaDestinos[1]);
