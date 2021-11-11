import Person from './Person_funcional'
import { list } from './Person_funcional'

class ListPersonImperative{
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

    private idToOptions(id:number, options:string, message:string):string{
        const array: Array<Person> = this.list;

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

    public deleteItem(id:number): Array<Person>|string{
        const array: Array<Person> = this.list;

        for(var i:number=0; i<array.length; i++){
            if(array[i].getId == id){
                array.splice(i,1);
                return array;
            }
        }
        return this.messageDoNotExist;
    }

    // D

    public updateItem(id: number, option: string, alteration: string): Array<Person>|string{
        const array: Array<Person> = this.list;

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

// Testando a classe
// let list_teste = new ListPersonImperative(list)


// console.log(list_teste.idToName(1))
// console.log(list_teste.idToBio(1))
// list_teste.updateItem(1, 'bio', 'Testando a alteração')
// console.log(list_teste.idToBio(1))
// console.log(list_teste.deleteItem(1))
