import { Tecnico } from "./Tecnico.js";

class TecnicoRedes extends Tecnico {
    constructor(matricula, nome, especialidade, valorHora) {
        super(matricula, nome, especialidade, valorHora);
    }

    mostrarDados() {
        return `
Técnico de Redes:
${super.mostrarDados()}`

    }
}

export { TecnicoRedes };
