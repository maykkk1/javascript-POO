export class Cliente {
    _nome;
    _cpf;

    set nome(nameValue) {
        this._nome = nameValue;
    }

    get nome (){
        return this._nome
    }

    get cpf (){
        return this._cpf
    }

    constructor (nome, cpf) {
        this._nome = nome;
        this._cpf = cpf
    }
}

