// Classe principal Tecnico
class Tecnico {
  #matricula;
  #nome;
  #especialidade;
  #valorHora;
  #telefone;
  constructor(matricula, nome, especialidade, valorHora, telefone) {
    this.matricula = matricula;
    this.nome = nome;
    this.especialidade = especialidade;
    this.valorHora = valorHora;
    this.telefone = telefone;
  }
  get matricula() {
    return this.#matricula;
  }
  set matricula(novaMatricula) {
    if (typeof novaMatricula !== "string" || novaMatricula.trim() === "") {
      throw new Error("Matrícula inválida. Deve ser uma string não vazia.");
    }
    this.#matricula = novaMatricula;
  }

  get nome() {
    return this.#nome;
  }
  set nome(novoNome) {
    if (typeof novoNome !== "string" || novoNome.trim() === "") {
      throw new Error("Nome inválido. Deve ser uma string não vazia.");
    }
    this.#nome = novoNome;
  }

  get especialidade() {
    return this.#especialidade;
  }
  set especialidade(novaEspecialidade) {
    if (
      typeof novaEspecialidade !== "string" ||
      novaEspecialidade.trim() === ""
    ) {
      throw new Error("Especialidade inválida. Deve ser uma string não vazia.");
    }
    const especialidadesValidas = ['Hardware', 'Software', 'Redes'];
    if (!especialidadesValidas.includes(novaEspecialidade)) {
        throw new Error(`Especialidade inválida. Deve ser uma das seguintes: ${especialidadesValidas.join(', ')}`);
    }
    this.#especialidade = novaEspecialidade;
  }

  get valorHora() {
    return this.#valorHora;
  }
  set valorHora(novoValorHora) {
    if (typeof novoValorHora !== "number" || novoValorHora <= 0) {
      throw new TypeError("Valor hora inválido. Deve ser um número positivo.");
    }
    this.#valorHora = novoValorHora;
  }

  get telefone() {
    return this.#telefone;
  }
  set telefone(novoTelefone) {
    if (typeof novoTelefone !== "string" ||
      (novoTelefone.trim().length !== 11 && novoTelefone.trim().length !== 13)) {
        throw new Error(`// o código ${novoTelefone} é inválido.\nA operação de atribuição de número para ${this.nome} ${this.matricula} foi cancelada.`)
      }
      return this.#telefone = novoTelefone;
  }

  calcularPagamento(horasTrabalhadas) {
    if (typeof horasTrabalhadas !== "number" ||
        horasTrabalhadas <= 0 ||
        Number.isNaN(horasTrabalhadas)) {
          throw new Error(`// o método calcularPagamento() requer um número válido e maior que 0.`)
        }
    return (this.valorHora * horasTrabalhadas);
  }

  mostrarDados() {
    console.log(`\n• Exibindo dados de Técnico:
- matrícula: ${this.matricula}
- nome: ${this.nome}
- especialidade: ${this.especialidade}
- valor da hora: R$: ${this.valorHora.toFixed(2)}`);
  }
}

export { Tecnico };
