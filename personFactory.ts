enum EnumPerson{
    Lovelace = 'Lovelace',
    Turing = 'Turing',
    Tesla = 'Tesla',
    Copernico = 'Copernico'
}

abstract class Person {

    private id: number;
    private name: string;
    private bio: string;
    private inventions: Array<string>;

    constructor(id?: number, name?: string, bio?: string){
        this.id = id;
        this.name = name;
        this.bio = bio;
        this.inventions = [];
    }

    public get getInventions(): Array<string>{
        return this.inventions;
    }

    public get getId(): number{
        return this.id;
    }

    public get getBio(): string{
        return this.bio;
    }
    
    public get getName(): string{
        return this.name;
    }
    
    public set updateBio(changes: string){
        this.bio = changes;
    }

    public set updateName(changes: string){
        this.name = changes;
    }

    public set updateId(id: number){
        this.id = id;
    }

    public addInventions(invention: string){
        this.inventions.push(invention)
    }
}

class PersonFabric {
    public criaPerson(Person: EnumPerson): Person{
        if (Person === EnumPerson.Lovelace) return new Lovelace();
        else if (Person === EnumPerson.Turing) return new Turing();
        else if (Person === EnumPerson.Tesla) return new Tesla();
        else if (Person === EnumPerson.Copernico) return new Copernico(); 
        else return null;
    }
}

class Lovelace extends Person {
    constructor() {
        super(1, 'Ada Lovelace', 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina');
        this.addInventions('Linguagem de programação Ada');
    }
}

class Turing extends Person {
    constructor() {
        super(2, 'Alan Turing', 'Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial');
        this.addInventions('Teste de Turing');
    }
}

class Tesla extends Person {
    constructor() {
        super(3, 'Nikola Tesla', 'Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada');
        this.addInventions('Motor de Corrente Alternada');
    }
}

class Copernico extends Person {
    constructor() {
        super(4, 'Nicolau Copérnico', 'Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar');
        this.addInventions('Teoria heliocêntrica');
    }
}

// A 
const fabrica: PersonFabric = new PersonFabric();
const ada:Lovelace = fabrica.criaPerson(EnumPerson.Lovelace);

// B 
console.log('Quem criou a linguagem de programação Ada?');
console.log(`${ada.getName} inventou o seguinte: ${ada.getInventions}`);
