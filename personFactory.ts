import { EnumPessoa } from "./person";
import { Pessoa } from "./person";

export class FabricaPessoa {
    public criaPessoa(pessoa: EnumPessoa): Pessoa{
        if (pessoa === EnumPessoa.Lovelace) return new Lovelace()
        else if (pessoa === EnumPessoa.Turing) return new Turing()
        else if (pessoa === EnumPessoa.Tesla) return new Tesla()
        else if (pessoa === EnumPessoa.Copernico) return new Copernico() 
        else return null

    }
}

class Lovelace extends Pessoa {
    constructor() {
        super(1, 'Ada Lovelace', 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina')
        this.adiciona_invencoes('Linguagem de programação Ada')
    }
}

class Turing extends Pessoa {
    constructor() {
        super(2, 'Alan Turing', 'Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial')
        this.adiciona_invencoes('Teste de Turing')
    }
}

class Tesla extends Pessoa {
    constructor() {
        super(3, 'Nikola Tesla', 'Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada')
        this.adiciona_invencoes('Motor de Corrente Alternada')
    }
}

class Copernico extends Pessoa {
    constructor() {
        super(4, 'Nicolau Copérnico', 'Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar')
        this.adiciona_invencoes('Teoria heliocêntrica')
    }
}

// A 
const fabrica: FabricaPessoa = new FabricaPessoa()
const ada:Lovelace = fabrica.criaPessoa(EnumPessoa.Lovelace)

// B 
console.log('Quem criou a linguagem de programação Ada?')
console.log(`${ada.pega_name} inventou o seguinte: ${ada.pega_invencoes}` )
