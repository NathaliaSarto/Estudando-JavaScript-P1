export class ContaCorrente{
    agencia;
    cliente;

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

    transferir (valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        conta.cidade = "Pit City";
        valor = 20;
    }

    }
