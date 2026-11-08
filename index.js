import { Tecnico } from "./Tecnico.js"; 
import { TecnicoHardware } from "./TecnicoHardware.js";
import { TecnicoRedes } from "./TecnicoRedes.js";
import { TecnicoSoftware } from "./TecnicoSoftware.js";
import { Equipamento } from "./Equipamento.js";

const tecnicoteste = new TecnicoHardware("T-001", "João", "Hardware", 50);
tecnicoteste.mostrarDados()

const tecnicoteste2 = new TecnicoSoftware("T-002", "Maria", "Software", 60);

tecnicoteste2.mostrarDados()

const tecnicoteste3 = new TecnicoRedes("T-003", "Carlos", "Redes", 70);
tecnicoteste3.mostrarDados()

const equipamentoteste = new Equipamento("E-001", "em manutenção", "Computador Dell", "computador") 

equipamentoteste.mostrarDados()

