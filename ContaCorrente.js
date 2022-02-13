import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0
    _agencia;
    _cliente;

    set cliente(novoValor) {
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
            console.log(`aconteci`)
        }
        
    } 

    set agencia(agenciaValor) {
        this._agencia = agenciaValor;
    }

    _saldo = 0;

    get saldo (){
        return this._saldo
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas++;
    }


    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            console.log('Valor sacado com sucesso!')
            return valor
        } else {
            console.log("Saldo insuficiente!");
        }
    }
    depositar(valor){
        if(valor<0) return
        this._saldo+=valor 
    }

    transferir(valor, conta){
        conta.depositar(this.sacar(valor))
    } 
}