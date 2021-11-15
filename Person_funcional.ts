interface PersonMolde{
    id:number;
    name:string;
    bio:string;
}
class Person{

    private id: number;
    private name: string;
    private bio: string;

    constructor(id:number, name:string, bio:string){
        this.id = id;
        this.name = name;
        this.bio = bio;
    }

    public get getId():number{
        return this.id;
    }

    public get getBio():string{
        return this.bio;
    }
    
    public get getName():string{
        return this.name;
    }
    
    public set replaceBio(bio_trocada:string){
        this.bio = bio_trocada;
    }

    public set replaceName(name_trocado:string){
        this.name = name_trocado;
    }
}

class ListPersonFunctional{

    private list: Array<Person>;
    private messageDoNotExist: string;

    constructor(list: Array<Person>){
        this.list = list;
        this.messageDoNotExist = 'O item não existe';
    }

    private findPerson(id:number): Person{
        let item = this.list.find(object => object.getId == id);
        if(item) return item;
        else throw 'O item não existe'
    }

    private idToOptions(id:number, option:string, message:string): string{
        let item = this.findPerson(id)
        if(item){
            if(option == 'bio') {
                if(item.getBio === undefined) return `O ID passado não possui ${message}`;
                else return item.getBio;
            } 
            else if(option=='name') {
                if(item.getName === undefined) return `O ID passado não possui ${message}`;
                else return item.getName;
            }
        }
        throw 'O item não existe'; 
    }

    // A
    public idToBio(id:number): string{
        return this.idToOptions(id, 'bio', 'biografia')
    }

    // B
    public idToName(id: number): string{
        return this.idToOptions(id, 'name', 'nome')
    }

    // C
    public deleteItem(id: number){
        if(this.findPerson(id)){
            let itemIndex = this.list.indexOf(this.findPerson(id));
            this.list.splice(itemIndex, 1);
            return this.list;
        }
        else return this.messageDoNotExist;
    }

    // D
    public updateItem(id: number, option: string, alteration: string){
        if(this.findPerson(id)){
            let item = this.list.indexOf(this.findPerson(id));
            
            if(option.toLowerCase() == 'bio'){ this.list[item].replaceBio = alteration; }
            else if (option.toLowerCase() == 'name'){ this.list[item].replaceName = alteration; }
            else return 'Opção não reconhecida, opções disponíveis para alteração: bio, name';
        }
        else return this.messageDoNotExist;
    }
}

let list: Array<Person> = [
    new Person(1, 'Ada Lovelace', 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina'),
    new Person(2, 'Alan Turing', 'Alan Turing foi um matemático, cientista da computação, lógico, criptoanalist, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia'), 
    new Person(3, 'Nikola Tesla', 'Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.'),
    new Person(4, 'Nicolau Copérnico', 'Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.') 
]

// Testando a classe
// let test_list = new ListPersonFunctional(list)

// console.log(test_list.idToName(1))
// console.log(test_list.idToBio(1))
// test_list.updateItem(1, 'bio', 'Testando a alteração')
// console.log(test_list.idToBio(1))
// console.log(test_list.deleteItem(1))