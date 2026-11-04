// Classe principal Tecnico
class Tecnico {
    #matricula
    #nome
    #especialidade
    #valorHora
    constructor(matricula, nome, especialidade, valorHora) {
        this.matricula = matricula
        this.nome = nome;  
        this.especialidade = especialidade;
        this.valorHora = valorHora;
    }
    get matricula() {
        return this.#matricula;
    }
    set matricula(novaMatricula) {
        if (typeof novaMatricula !== 'string' || novaMatricula.trim() === '') {
            throw new Error('Matrícula inválida. Deve ser uma string não vazia.');
        }
        this.#matricula = novaMatricula;
    }

    get nome() {
        return this.#nome;
    }
    set nome(novoNome) {
        if (typeof novoNome !== 'string' || novoNome.trim() === '') {
            throw new Error('Nome inválido. Deve ser uma string não vazia.');
        }
        this.#nome = novoNome;
    }

    get especialidade() {
        return this.#especialidade;
    }
    set especialidade(novaEspecialidade) {
        if (typeof novaEspecialidade !== 'string' || novaEspecialidade.trim() === '') {
            throw new Error('Especialidade inválida. Deve ser uma string não vazia.');
        }
        this.#especialidade = novaEspecialidade;
    }

    get valorHora() {
        return this.#valorHora;
    }
    set valorHora(novoValorHora) {
        if (typeof novoValorHora !== 'number' || novoValorHora <= 0) {
            throw new Error('Valor hora inválido. Deve ser um número positivo.');
        }
        this.#valorHora = novoValorHora;
    }

    mostrarDados() {
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Especialidade: ${this.especialidade}`);
        console.log(`Valor Hora: R$${this.valorHora.toFixed(2)}`);
    }

}

export { Tecnico };

