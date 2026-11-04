import { Tecnico } from "./Tecnico.js";

class TecnicoSoftware extends Tecnico {
    constructor(matricula, nome, especialidade, valorHora) {
        super(matricula, nome, especialidade, valorHora);
    }
}

export { TecnicoSoftware };