import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./Funcionarios/SistemaDeAutenticacao.js";


const diretor = new Diretor("Maycon", 1111122323, 10000)
const gerente = new Gerente("Ricardo", 123123213, 5000)
diretor.cadastrarSenha("123456789")
const estaLogado = SistemaAutenticacao.login(diretor, "123456789")
const cliente = new Cliente('ana', 212323213213, 12345)
const clienteEstaLogado = SistemaAutenticacao.login(cliente, 12345)

console.log(clienteEstaLogado, estaLogado)