import { Tecnico } from "./Tecnico.js";

class TecnicoHardware extends Tecnico {
    constructor(matricula, nome, valorHora, telefone) {
        super(matricula, nome, "Hardware", valorHora, telefone);
    }
}

export { TecnicoHardware };