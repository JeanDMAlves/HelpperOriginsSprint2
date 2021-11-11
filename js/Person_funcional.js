export let list = [
    { 'id': 1, 'name': 'Ada Lovelace', 'bio': 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina' },
    { 'id': 2, 'name': 'Alan Turing', 'bio': 'Alan Turing foi um matemático, cientista da computação, lógico, criptoanalist, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia' },
    { 'id': 3, 'name': 'Nikola Tesla', 'bio': 'Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.' },
    { 'id': 4, 'name': 'Nicolau Copérnico', 'bio': 'Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.' }
];
export default class Person {
    constructor(id, name, bio) {
        this.id = id;
        this.name = name;
        this.bio = bio;
    }
    get getId() {
        return this.id;
    }
    get getBio() {
        return this.bio;
    }
    get getName() {
        return this.name;
    }
    set replaceBio(bio_trocada) {
        this.bio = bio_trocada;
    }
    set replaceName(name_trocado) {
        this.name = name_trocado;
    }
}
class ListPersonFunctional {
    constructor(list) {
        this.list = this.transformList(list);
        this.messageDoNotExist = 'O item não existe';
    }
    transformList(list) {
        let transformedList = [];
        for (let i = 0; i < list.length; i++) {
            let item = list[i];
            let person = new Person(item['id'], item['name'], item['bio']);
            transformedList.push(person);
        }
        return transformedList;
    }
    findPerson(id) {
        let item = this.list.find(object => object.getId == id);
        return item;
    }
    idToOptions(id, option, message) {
        if (this.findPerson(id)) {
            let item = this.findPerson(id);
            if (option == 'bio') {
                if (item.getBio === undefined)
                    return `O ID passado não possui ${message}`;
                else
                    return item.getBio;
            }
            else if (option == 'name') {
                if (item.getName === undefined)
                    return `O ID passado não possui ${message}`;
                else
                    return item.getName;
            }
        }
        else
            return this.messageDoNotExist;
    }
    // A
    idToBio(id) {
        return this.idToOptions(id, 'bio', 'biografia');
    }
    // B
    idToName(id) {
        return this.idToOptions(id, 'name', 'nome');
    }
    // C
    deleteItem(id) {
        if (this.findPerson(id)) {
            let itemIndex = this.list.indexOf(this.findPerson(id));
            this.list.splice(itemIndex, 1);
            return this.list;
        }
        else
            return this.messageDoNotExist;
    }
    // D
    updateItem(id, option, alteration) {
        if (this.findPerson(id)) {
            let item = this.list.indexOf(this.findPerson(id));
            if (option.toLowerCase() == 'bio') {
                this.list[item].replaceBio = alteration;
            }
            else if (option.toLowerCase() == 'name') {
                this.list[item].replaceName = alteration;
            }
            else
                return 'Opção não reconhecida, opções disponíveis para alteração: bio, name';
        }
        else
            return this.messageDoNotExist;
    }
}
// Testando a classe
let test_list = new ListPersonFunctional(list);
console.log(test_list.idToName(1));
console.log(test_list.idToBio(1));
test_list.updateItem(1, 'bio', 'Testando a alteração');
console.log(test_list.idToBio(1));
console.log(test_list.deleteItem(1));
//# sourceMappingURL=Person_funcional.js.map