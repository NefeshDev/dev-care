import { Tecnico } from "./Tecnico.js";

class TecnicoSoftware extends Tecnico {
    constructor(matricula, nome, especialidade, valorHora) {
        super(matricula, nome, especialidade, valorHora);
    }

    mostrarDados() {
        console.log(`Técnico de Software:`)
        super.mostrarDados()
        console.log("--------------------") 

    }
}

export { TecnicoSoftware };