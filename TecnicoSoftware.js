import { Tecnico } from "./Tecnico.js";

class TecnicoSoftware extends Tecnico {
    constructor(matricula, nome, valorHora, telefone) {
        super(matricula, nome, "Software", valorHora, telefone);
    }
}

export { TecnicoSoftware };