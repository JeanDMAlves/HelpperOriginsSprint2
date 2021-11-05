export let lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
export default class Person {
    constructor(id, name, bio) {
        this.id = id;
        this.name = name;
        this.bio = bio;
    }
    get pega_id() {
        return this.id;
    }
    get pega_bio() {
        return this.bio;
    }
    get pega_name() {
        return this.name;
    }
    set troca_bio(bio_trocada) {
        this.bio = bio_trocada;
    }
    set troca_name(name_trocado) {
        this.name = name_trocado;
    }
}
class Lista_person_funcional {
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
    verifica_existencia_item(id) {
        let item = this.lista.filter(objeto => objeto.pega_id == id);
        return item.length !== 0;
    }
    item_por_id(id) {
        let item = this.lista.filter(objeto => objeto.pega_id == id);
        if (this.verifica_existencia_item(id))
            return item[0];
    }
    // A
    id_para_bio(id) {
        if (this.verifica_existencia_item(id)) {
            let item = this.item_por_id(id).pega_bio;
            if (item === undefined)
                return "O ID passado não possui biografia";
            else
                return item;
        }
        else
            return "O item não existe";
    }
    // B
    id_para_nome(id) {
        if (this.verifica_existencia_item(id)) {
            let item = this.item_por_id(id).pega_name;
            if (item === undefined)
                return "O ID passado não possui nome";
            else
                return item;
        }
        else
            return "O item não existe";
    }
    // C
    apaga_item(id) {
        if (this.verifica_existencia_item(id)) {
            let indice_item = this.lista.indexOf(this.item_por_id(id));
            this.lista.splice(indice_item, 1);
            return this.lista;
        }
        else
            return "O item não existe";
    }
    // D
    altera_item(id, opcao, alteracao) {
        if (this.verifica_existencia_item(id)) {
            let item = this.lista.indexOf(this.item_por_id(id));
            if (opcao.toLowerCase() == "bio") {
                this.lista[item].troca_bio = alteracao;
            }
            else if (opcao.toLowerCase() == "name") {
                this.lista[item].troca_name = alteracao;
            }
            else
                return "Opção não reconhecida, opções disponíveis para alteração: bio, name";
        }
        else
            return "O item não existe";
    }
}
// Testando a classe
let lista_teste = new Lista_person_funcional(lista);
console.log(lista_teste.id_para_nome(1));
console.log(lista_teste.id_para_bio(1));
lista_teste.altera_item(1, "bio", "Testando a alteração");
console.log(lista_teste.id_para_bio(1));
console.log(lista_teste.apaga_item(1));
//# sourceMappingURL=Person_funcional.js.map