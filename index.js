import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente('maycon', '027312873721');
const contaCorrente1 = new ContaCorrente(3344, cliente1);
const cliente2 = new Cliente('lua', '027312823221');
const contaCorrente2 = new ContaCorrente(3344, cliente2);


contaCorrente1.depositar(100)

console.log(contaCorrente2)
console.log(contaCorrente1.saldo)
console.log(ContaCorrente.numeroDeContas)
