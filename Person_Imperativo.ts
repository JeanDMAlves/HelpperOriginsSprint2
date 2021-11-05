import Person from "./Person_funcional"
import { lista } from "./Person_funcional"
class Lista_person_imperativo{
    private lista: Array<Person>
    
    constructor(lista: Array<object>){
        this.lista = this.transforma_lista(lista)
    }

    public get pega_lista(){
        return this.lista
    }

    private transforma_lista(lista:Array<object>): Array<Person>{
        let lista_transformada:Array<Person> = []
        
        for(let i=0; i<lista.length; i++){
            let item = lista[i]
            let pessoa = new Person(item["id"], item["name"], item["bio"])
            lista_transformada.push(pessoa)
        }
        return lista_transformada  
    }

    // A
    public id_para_bio(id:number): string{
        const array: Array<Person> = this.lista

        for(var i:number=0; i<array.length; i++){
            if(array[i].pega_id == id){
                let biografia:string = array[i].pega_bio
                if (biografia == undefined){
                    return 'Biografia não encontrada'
                }
                else{
                    return biografia
                }
            }
        }
        return 'Id não encontrado'

    }

    // B
    public id_para_nome(id:number): string{
        const array: Array<Person> = this.lista

        for(var i: number =0; i<array.length; i++){
            if(array[i].pega_id == id){
                let nome:string = array[i].pega_name
                if (nome == undefined){
                    return 'Nome não encontrado'
                }
                else{
                    return nome
                }
            }
        }
        return 'Id não encontrado'
    }

    // C

    public apaga_item(id:number): Array<Person>|string{
        const array: Array<Person> = this.lista

        for(var i:number=0; i<array.length; i++){
            if(array[i].pega_id == id){
                array.splice(i,1)
                return array
            }
        }
        return 'Id não encontrado'
    }

    // D

    public altera_item(id: number, opcao: string, alteracao: string): Array<Person>|string{
        const array: Array<Person> = this.lista

        for(var i:number=0; i<array.length; i++){
            let item = array[i]
            if(item.pega_id == id){
                if(opcao.toLowerCase() == 'bio'){
                    item.troca_bio = alteracao
                }
                else if(opcao.toLowerCase() == 'name'){
                    item.troca_name = alteracao
                }
                else{
                    return 'Opção não reconhecida, opções disponíveis para alteração: bio, name'
                }
                return array
            }
        }
        return 'Id não encontrado'
    }
}

// Testando a classe
let lista_teste = new Lista_person_imperativo(lista)


console.log(lista_teste.id_para_nome(1))
console.log(lista_teste.id_para_bio(1))
lista_teste.altera_item(1, "bio", "Testando a alteração")
console.log(lista_teste.id_para_bio(1))
console.log(lista_teste.apaga_item(1))
