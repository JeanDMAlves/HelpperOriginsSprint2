import Person from './Person_funcional';
class ListPersonImperative {
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
    idToOptions(id, options, message) {
        const array = this.list;
        for (var i = 0; i < array.length; i++) {
            let item = array[i];
            if (item.getId == id) {
                if (options == 'bio') {
                    if (item.getBio === undefined)
                        return `O ID passado não possui ${message}`;
                    else
                        return item.getBio;
                }
                else if (options == 'name') {
                    if (item.getName === undefined)
                        return `O ID passado não possui ${message}`;
                    else
                        return item.getName;
                }
            }
        }
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
        const array = this.list;
        for (var i = 0; i < array.length; i++) {
            if (array[i].getId == id) {
                array.splice(i, 1);
                return array;
            }
        }
        return this.messageDoNotExist;
    }
    // D
    updateItem(id, option, alteration) {
        const array = this.list;
        for (var i = 0; i < array.length; i++) {
            let item = array[i];
            if (item.getId == id) {
                if (option.toLowerCase() == 'bio') {
                    item.replaceBio = alteration;
                }
                else if (option.toLowerCase() == 'name') {
                    item.replaceName = alteration;
                }
                else {
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
//# sourceMappingURL=Person_Imperativo.js.map