import Person from "./Person_funcional";
import { lista } from "./Person_funcional";
class Lista_person_imperativo {
    constructor(lista) {
        this.lista = this.transforma_lista(lista);
    }
    get pega_lista() {
        return this.lista;
    }
    transforma_lista(lista) {
        let lista_transformada = [];
        for (let i = 0; i < lista.length; i++) {
            let item = lista[i];
            let pessoa = new Person(item["id"], item["name"], item["bio"]);
            lista_transformada.push(pessoa);
        }
        return lista_transformada;
    }
    // A
    id_para_bio(id) {
        const array = this.lista;
        for (var i = 0; i < array.length; i++) {
            if (array[i].pega_id == id) {
                let biografia = array[i].pega_bio;
                if (biografia == undefined) {
                    return 'Biografia não encontrada';
                }
                else {
                    return biografia;
                }
            }
        }
        return 'Id não encontrado';
    }
    // B
    id_para_nome(id) {
        const array = this.lista;
        for (var i = 0; i < array.length; i++) {
            if (array[i].pega_id == id) {
                let nome = array[i].pega_name;
                if (nome == undefined) {
                    return 'Nome não encontrado';
                }
                else {
                    return nome;
                }
            }
        }
        return 'Id não encontrado';
    }
    // C
    apaga_item(id) {
        const array = this.lista;
        for (var i = 0; i < array.length; i++) {
            if (array[i].pega_id == id) {
                array.splice(i, 1);
                return array;
            }
        }
        return 'Id não encontrado';
    }
    // D
    altera_item(id, opcao, alteracao) {
        const array = this.lista;
        for (var i = 0; i < array.length; i++) {
            let item = array[i];
            if (item.pega_id == id) {
                if (opcao.toLowerCase() == 'bio') {
                    item.troca_bio = alteracao;
                }
                else if (opcao.toLowerCase() == 'name') {
                    item.troca_name = alteracao;
                }
                else {
                    return 'Opção não reconhecida, opções disponíveis para alteração: bio, name';
                }
                return array;
            }
        }
        return 'Id não encontrado';
    }
}
// Testando a classe
let lista_teste = new Lista_person_imperativo(lista);
console.log(lista_teste.id_para_nome(1));
console.log(lista_teste.id_para_bio(1));
lista_teste.altera_item(1, "bio", "Testando a alteração");
console.log(lista_teste.id_para_bio(1));
console.log(lista_teste.apaga_item(1));
//# sourceMappingURL=Person_Imperativo.js.map