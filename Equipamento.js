class Equipamento {
    #statusValidos = ["retornado", "consertado", "em manutenção"];
    #categoriasValidas = ["notebook", "computador"];
    _status;
    _descricao;
    _categoria;

    constructor(codigo, status, descricao, categoria) {
        this.codigo = codigo;
        this.status = status;
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
        this._codigo = value;
    }

    get status() {
        return this._status;
    }
    set status(value) {
        if (!this.#statusValidos.includes(value)) {
            throw new Error(`Status inválido. Valores válidos: ${this.#statusValidos.join(", ")}`);
        }
        this._status = value;
    }

    get descricao() {
        return this._descricao;
    }
    set descricao(value) {
        if (!value) {
            throw new Error("Descrição é obrigatória");
        }
        this._descricao = value;
    }

    get categoria() {
        return this._categoria;
    }
    set categoria(value) {
        if (!this.#categoriasValidas.includes(value)) {
            throw new Error(`Categoria inválida. Valores válidos: ${this.#categoriasValidas.join(", ")}`);
        }
        this._categoria = value;
    }

    mostrarDados(){
        console.log("\n--- Equipamento ---")
        console.log(`Código: ${this.codigo}`)
        console.log(`Status: ${this.status}`)
        console.log(`Descrição: ${this.descricao}`)
        console.log(`Categoria: ${this.categoria}`)
    }
}

