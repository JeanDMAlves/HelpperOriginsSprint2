export let list: Array<Object> = [
    {'id' : 1, 'name': 'Ada Lovelace', 'bio' : 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina'},
    {'id' : 2, 'name': 'Alan Turing', 'bio' : 'Alan Turing foi um matemático, cientista da computação, lógico, criptoanalist, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia'},
    {'id' : 3, 'name': 'Nikola Tesla', 'bio' : 'Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.'},
    {'id' : 4, 'name': 'Nicolau Copérnico', 'bio': 'Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.'}
]

export default class Person{

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

    constructor(list: Array<object>){
        this.list = this.transformList(list);
        this.messageDoNotExist = 'O item não existe';
    }

    private transformList(list:Array<object>): Array<Person>{
        let transformedList:Array<Person> = [];
        for(let i=0; i<list.length; i++){
            let item = list[i];
            let person = new Person(item['id'], item['name'], item['bio']);
            transformedList.push(person);
        }
        return transformedList;  
    }

    private checkItemExistence(id:number): boolean{
        let item = this.list.filter(object => object.getId == id);
        return item.length !== 0;
    }

    private itemById(id:number): Person{
        let item = this.list.filter(object => object.getId == id);
        if(this.checkItemExistence(id)) return item[0];
    }

    private idToOptions(id:number, option:string, message:string):string{
        if(this.checkItemExistence(id)){
            let item = this.itemById(id)
            if(option == 'bio') {
                if(item.getBio === undefined) return `O ID passado não possui ${message}`;
                else return item.getBio;
            } 
            else if(option=='name') {
                if(item.getName === undefined) return `O ID passado não possui ${message}`;
                else return item.getName;
            }
        }
        else return this.messageDoNotExist;
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
        if(this.checkItemExistence(id)){
            let itemIndex = this.list.indexOf(this.itemById(id));
            this.list.splice(itemIndex, 1);
            return this.list;
        }
        else return this.messageDoNotExist;
    }

    // D
    public updateItem(id: number, option: string, alteration: string){
        if(this.checkItemExistence(id)){
            let item = this.list.indexOf(this.itemById(id));
            
            if(option.toLowerCase() == 'bio'){ this.list[item].replaceBio = alteration; }
            else if (option.toLowerCase() == 'name'){ this.list[item].replaceName = alteration; }
            else return 'Opção não reconhecida, opções disponíveis para alteração: bio, name';
        }
        else return this.messageDoNotExist;
    }
}

// Testando a classe
// let test_list = new ListPersonFunctional(list)

// console.log(test_list.idToName(1))
// console.log(test_list.idToBio(1))
// test_list.updateItem(1, 'bio', 'Testando a alteração')
// console.log(test_list.idToBio(1))
// console.log(test_list.deleteItem(1))

