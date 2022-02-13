import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario {
    constructor(nome, cpf) {
        super(nome, cpf, 3500);
    }
}