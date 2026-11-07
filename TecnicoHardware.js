import { Tecnico } from "./Tecnico.js";

class TecnicoHardware extends Tecnico {
    constructor(matricula, nome, especialidade, valorHora) {
        super(matricula, nome, especialidade, valorHora);
    }

    mostrarDados() {
        console.log(`Técnico de Hardware:`)
        super.mostrarDados()
        console.log("--------------------")

    }     
}

export { TecnicoHardware };