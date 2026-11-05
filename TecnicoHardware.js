import { Tecnico } from "./Tecnico.js";

class TecnicoHardware extends Tecnico {
    constructor(matricula, nome, especialidade, valorHora) {
        super(matricula, nome, especialidade, valorHora);
    }

    mostrarDados() {
        return `
Técnico de Hardware:
${super.mostrarDados()}`

    } 
    
}

export { TecnicoHardware };