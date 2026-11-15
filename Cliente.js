export class Cliente {
    #telefone;
    constructor(matricula, nome, endereco, telefone) {
        this.matricula = matricula;
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
    }

    get telefone() {
        return this.#telefone;
    }
    set telefone(novoTelefone) {
        if (typeof novoTelefone !== "string" ||
        (novoTelefone.trim().length !== 11 && novoTelefone.trim().length !== 13)) {
            throw new Error(`o código ${novoTelefone} é inválido.`);
        }
        return this.#telefone = novoTelefone;
    }
    
    mostrarDados() {
    console.log(`\n• Exibindo dados de Cliente:
- matrícula: ${this.matricula};
- cliente: ${this.nome}, telefone: ${this.telefone};
- endereco: ${this.endereco}.`);
    }
}