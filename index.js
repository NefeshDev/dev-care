import { Cliente } from "./Cliente.js";
import { TecnicoHardware } from "./TecnicoHardware.js";
import { TecnicoRedes } from "./TecnicoRedes.js";
import { TecnicoSoftware } from "./TecnicoSoftware.js";
import { Equipamento } from "./Equipamento.js";
import { Servico } from "./Servico.js";

const registros = [];

/*
operacao
- cadastro-cliente
- cadastro-tecnico
- status-servico
- status-equipamento

entidade
- (matricula)

mensagem
- (mensagem)
*/

const clientes = [
    new Cliente("C-001", "Pedro Almeida", "Rua das Flores, 120", "85999990001"),
    new Cliente("C-002", "Mariana Costa", "Av. Central, 450", "85999990002"),
    new Cliente("C-003", "Lucas Ferreira", "Rua do Sol, 85", "85999990003")
];

const tecnicos = [
    new TecnicoHardware("T-001", "João", 50, "85999994444"),
    new TecnicoSoftware("T-002", "Maria", 60, "41933338888"),
    new TecnicoRedes("T-003", "Carlos", 70, "21977772222")
];

const equipamentos = [
    new Equipamento("E-001", "Computador Dell", "computador"),
    new Equipamento("E-002", "Notebook Lenovo", "notebook"),
    new Equipamento("E-003", "Roteador TP-Link", "roteador"),
    new Equipamento("E-004", "Notebook Acer", "notebook"),
    new Equipamento("E-005", "Computador HP", "computador")
];

const servicos = [
    new Servico(
        "S-001",
        clientes[0],
        equipamentos[0],
        tecnicos[0],
        "Computador não liga após uma queda de energia."
    ),
    new Servico(
        "S-002",
        clientes[1],
        equipamentos[1],
        tecnicos[1],
        "Notebook apresenta lentidão e falhas no sistema."
    ),
    new Servico(
        "S-003",
        clientes[2],
        equipamentos[2],
        tecnicos[2],
        "Roteador perde conexão com a rede frequentemente."
    ),
    new Servico(
        "S-004",
        clientes[0],
        equipamentos[3],
        tecnicos[1],
        "Notebook apresenta superaquecimento durante o uso."
    ),
    new Servico(
        "S-005",
        clientes[1],
        equipamentos[4],
        tecnicos[0],
        "Computador apresenta falhas recorrentes na inicialização."
    )
];

function verHistoricoCliente(matricula) {
    let cliente;
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].matricula === matricula) {
            cliente = clientes[i];
            break;
        }
        console.log(`// não foi encontrado cliente com a matrícula informada (${matricula})`);
        return false;
    }
    console.log(`\n• Operação: Visualizar histórico do Cliente`)
    let contagem = 0;
    for (const item of historicoServico) {
        if (item.cliente.matricula === matricula) {
            console.log(item);
            contagem++
        }
    }
    if (contagem < 1) {
        console.log(`// erro: não foi encontrado nenhum registro de serviços para o cliente de matrícula ${matricula}`);
        return false;
    }
    return true;
}


console.log(`\n------- Relatório de clientes -------`);
clientes.forEach(cliente => cliente.mostrarDados());

console.log(`\n------- Relatório de técnicos -------`);
tecnicos.forEach(tecnico => tecnico.mostrarDados());

console.log(`\n------- Relatório de equipamentos -------`);
equipamentos.forEach(equipamento => equipamento.mostrarDados());

console.log(`\n------- Relatório de serviços -------`);
servicos.forEach(servico => servico.mostrarDados());

console.log(`\n------- Relatório de uso do sistema -------`);
servicos[2].iniciar();
servicos[3].iniciar();
servicos[2].concluir();
servicos[2].mostrarDados();