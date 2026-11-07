import { Tecnico } from "./Tecnico.js";

class TecnicoRedes extends Tecnico {
    constructor(matricula, nome, especialidade, valorHora) {
        super(matricula, nome, especialidade, valorHora);
    }

    mostrarDados() {
        console.log(`Técnico de Redes:`)
        super.mostrarDados()
        console.log("--------------------")
    }
}

export { TecnicoRedes };
