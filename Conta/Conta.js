import { Cliente } from "../Cliente.js";

export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo conta");
        }
        if (cliente instanceof Cliente) {
            this._cliente = cliente
        }
        this._saldo = saldoInicial;
        this._agencia = agencia;

    }

    get saldo() {
        return this._saldo
    }

    get cliente() {
        return this._cliente
    }

    get agencia() {
        return this._agencia
    }

    sacar(valor){
        throw new Error("O método sacar da conta é abstrato")
    }

    _sacar(valor, taxa) {
        if(this._saldo >= valor) {
            this._saldo -= (valor * taxa)
            this._saldo = this.saldo.toFixed(2)
            return valor
        }
        return 0

    }
    depositar(valor){
        if(valor<0) return
        this._saldo+=valor 
    }

    transferir(valor, conta){
        conta.depositar(this.sacar(valor))
    } 
}