export class Funcionario {
    constructor(nome, cpf, salario) {
        if (this.constructor == Funcionario) {
            throw new Error("Você não deveria instaciar um objeto do tipo funcionário.")
        }
        this._nome = nome;
        this._cpf = cpf;
        this._salario = salario;

        this.bonificacao = 1;
    }

    autenticar(senha) {
        return senha == this._senha;
    }


    get nome(){
        return this._nome
    }

    set nome(nome){
        this._nome = nome;
    }

    get cpf(){
        return this._cpf
    }

    set cpf(cpf){
        this._cpf = cpf;
    }

    get salario(){
        return this._salario;
    }

}