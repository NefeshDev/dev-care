export class Servico {
    #status = "não iniciado";
    #altStatus = ["em andamento", "concluído", "cancelado"];
    #descProblema;
    constructor(codigo, cliente, equipamento, tecnico, descProblema) {
        this.codigo = codigo;
        this.cliente = cliente;
        this.equipamento = equipamento;
        this.tecnico = tecnico;
        if (typeof descProblema !== "string" ||
            descProblema.trim().length < 16) {
            throw new Error(`// erro: a descrição do problema deve ter pelo menos 16 letras.`);
        } else {
            this.#descProblema = descProblema;
        }
    }

    get status() {
        return this.#status;
    }
    set status(newStatus) {
        if (!this.#altStatus.includes(newStatus)) {
            throw new Error (`// alteração de status comprometida\n//o status ${newStatus} não é suportado\n// status suportados: ${this.#altStatus}.`);
        }
        console.log(`- o serviço: ${this.codigo} teve seu status alterado para \"${newStatus}\".`);
        return this.#status = newStatus;
    }

    calcularCusto(horasTrabalhadas) {
        return this.tecnico.calcularPagamento(horasTrabalhadas);
    }

    mostrarDados() {
        console.log(`\n• Exibindo dados de Serviço:
- código: ${this.codigo}, status: ${this.#status};
- cliente: ${this.cliente.nome}, id: ${this.cliente.matricula}, telefone: ${this.cliente.telefone};
- equipamento: ${this.equipamento.codigo};
- técnico: ${this.tecnico.nome}, id: ${this.tecnico.matricula}, telefone: ${this.tecnico.telefone};
- problema: ${this.#descProblema}.`);
    }

    iniciar() {
        if (this.status !== "não iniciado") {
            throw new Error(`// este serviço não é aplicável para ser iniciado.\n// status necessário: "não iniciado",\n// status atual: ${this.status})`);
        }
        console.log(`\n• Operação: iniciar serviço`);
        console.log(`- o serviço de código ${this.codigo} foi iniciado.`);
        this.status = this.#altStatus[0];
        this.equipamento.status = "em manutenção";
        return true;
    }

    concluir() {
        if (this.status !== this.#altStatus[0]) {
            throw new Error(`// este serviço não é aplicável para conclusão.\n// status necessário: "em andamento".\n// status atual: ${this.status})`);
        }
        console.log(`\n• Operação: concluir serviço`);
        console.log(`- o serviço de código ${this.codigo} foi concluído.`);
        this.status = this.#altStatus[1];
        this.equipamento.status = "consertado";
        return true;
    }

    cancelar() {
        if (this.status !== "não iniciado" && this.status !== this.#altStatus[0]) {
            throw new Error(`// este serviço não é aplicável para conclusão.\n// status necessário: "não iniciado" ou "em manutenção".\n// status atual: ${this.status})`);
        }
        console.log(`\n• Operação: cancelar serviço`);
        console.log(`- o serviço de código ${this.codigo} foi cancelado.`);
        this.status = this.#altStatus[2];
        this.equipamento.status = "retornado";
        return true;
    }
}