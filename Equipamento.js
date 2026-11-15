class Equipamento {
    #altStatus = ["em manutenção", "consertado", "retornado"];
    #categoriasValidas = ["notebook", "computador", "roteador"];
    _status = "aguardando manutenção";
    _descricao;
    _categoria;

    constructor(codigo, descricao, categoria) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.categoria = categoria;
    }

    get codigo() {
        return this._codigo;
    }
    set codigo(value) {
        if (!value) {
            throw new Error("Código é obrigatório");
        }
        return this._codigo = value;
    }

    get status() {
        return this._status;
    }
    set status(value) {
        if (!this.#altStatus.includes(value)) {
            throw new Error(`Status inválido. Valores válidos: ${this.#altStatus.join(", ")}`);
        }
        return this._status = value;
    }

    get descricao() {
        return this._descricao;
    }
    set descricao(value) {
        if (!value) {
            throw new Error("Descrição é obrigatória");
        }
        return this._descricao = value;
    }

    get categoria() {
        return this._categoria;
    }
    set categoria(value) {
        if (!this.#categoriasValidas.includes(value)) {
            throw new Error(`Categoria inválida. Valores válidos: ${this.#categoriasValidas.join(", ")}`);
        }
        return this._categoria = value;
    }

    mostrarDados(){
        console.log(`\n• Exibindo dados de Equipamento:
- código: ${this.codigo}
- status: ${this.status}
- descrição: ${this.descricao}
- categoria: ${this.categoria}`)
    }
}

export { Equipamento };
