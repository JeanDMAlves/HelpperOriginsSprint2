export var EnumPerson;
(function (EnumPerson) {
    EnumPerson["Lovelace"] = "Lovelace";
    EnumPerson["Turing"] = "Turing";
    EnumPerson["Tesla"] = "Tesla";
    EnumPerson["Copernico"] = "Copernico";
})(EnumPerson || (EnumPerson = {}));
export default class Person {
    constructor(id, name, bio) {
        this.id = id;
        this.name = name;
        this.bio = bio;
        this.inventions = [];
    }
    get getInventions() {
        return this.inventions;
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
    set updateBio(changes) {
        this.bio = changes;
    }
    set updateName(changes) {
        this.name = changes;
    }
    set updateId(id) {
        this.id = id;
    }
    addInventions(invention) {
        this.inventions.push(invention);
    }
}


//# sourceMappingURL=person.js.map