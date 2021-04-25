class Cliente{
   nome;
   cpf;
  
}

class contaCorrente{
    agencia;
    saldo =0;

    sacar(valor){
        if(this.saldo>=valor){
            //this.#saldo -= valor; 
            //tipo privado, aparece apenas se chamar dentro da classe
            this.saldo-=valor;
            return valor;
        }
    }

    depositar(valor){
        if (valor<=0){   
             //se for verdadeiro, já para a função. "early return"
            return;
        }
        this.saldo += valor;

        console.log(this.saldo);
    }

    }


const cliente1 = new Cliente();
const cliente2 = new Cliente();


 cliente1.nome = "Ricardo";
 cliente1.cpf = 123456789;
 
 cliente2.nome = "Waliks";
 cliente2.cpf = 987654321;

const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(200);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);
console.log(contaCorrenteRicardo);