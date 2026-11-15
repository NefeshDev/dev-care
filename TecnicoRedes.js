import { Tecnico } from "./Tecnico.js";

class TecnicoRedes extends Tecnico {
    constructor(matricula, nome, valorHora, telefone) {
        super(matricula, nome, "Redes", valorHora, telefone);
    }
}

export { TecnicoRedes };
