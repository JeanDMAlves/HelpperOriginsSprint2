class Person1{

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

class ListPersonImperative{
    private list: Array<Person1>;
    private messageDoNotExist: string;
    
    constructor(list: Array<Person1>){
        this.list = list;
        this.messageDoNotExist = 'O item não existe';
    }

    private idToOptions(id:number, options:string, message:string):string{
        const array: Array<Person1> = this.list;

        for(var i:number = 0; i<array.length; i++){
            let item = array[i]
            if(item.getId == id){

                if(options=='bio'){
                    if(item.getBio === undefined) return `O ID passado não possui ${message}`;
                    else return item.getBio;
                }
                else if(options=='name') {
                    if(item.getName === undefined) return `O ID passado não possui ${message}`;
                    else return item.getName;
                }

            }
        }
        return this.messageDoNotExist;
    }

    // A
    public idToBio(id:number): string{
        return this.idToOptions(id, 'bio', 'biografia')

    }

    // B
    public idToName(id:number): string{
        return this.idToOptions(id, 'name', 'nome')
    }

    // C

    public deleteItem(id:number): Array<Person1>|string{
        const array: Array<Person1> = this.list;

        for(var i:number=0; i<array.length; i++){
            if(array[i].getId == id){
                array.splice(i,1);
                return array;
            }
        }
        return this.messageDoNotExist;
    }

    // D

    public updateItem(id: number, option: string, alteration: string): Array<Person1>|string{
        const array: Array<Person1> = this.list;

        for(var i:number=0; i<array.length; i++){
            let item = array[i];
            if(item.getId == id){
                if(option.toLowerCase() == 'bio'){
                    item.replaceBio = alteration;
                }
                else if(option.toLowerCase() == 'name'){
                    item.replaceName = alteration;
                }
                else{
                    return 'Opção não reconhecida, opções disponíveis para alteração: bio, name';
                }
                return array;
            }
        }
        return this.messageDoNotExist;
    }
}

let list1: Array<Person1> = [
    new Person1(1, 'Ada Lovelace', 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina'),
    new Person1(2, 'Alan Turing', 'Alan Turing foi um matemático, cientista da computação, lógico, criptoanalist, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia'), 
    new Person1(3, 'Nikola Tesla', 'Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.'),
    new Person1(4, 'Nicolau Copérnico', 'Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.') 
]

// Testando a classe
// let test_list = new ListPersonImperative(list1)

// console.log(test_list.idToName(1))
// console.log(test_list.idToBio(1))
// test_list.updateItem(1, 'bio', 'Testando a alteração')
// console.log(test_list.idToBio(1))
// console.log(test_list.deleteItem(1))