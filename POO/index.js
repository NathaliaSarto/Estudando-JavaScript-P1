import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
const cliente2 = new Cliente();

 cliente1.nome = "Ricardo";
 cliente1.cpf = 123456789;
 
 cliente2.nome = "Waliks";
 cliente2.cpf = 987654321;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 505;

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);
console.log ("Valor: " , valor);


console.log (conta2);
//contaCorrenteRicardo.depositar(100);
//contaCorrenteRicardo.depositar(200);

//const valorSacado = contaCorrenteRicardo.sacar(50);
//console.log(valorSacado);
//console.log(contaCorrenteRicardo);