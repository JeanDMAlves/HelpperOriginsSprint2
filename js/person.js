export var EnumPessoa;
(function (EnumPessoa) {
    EnumPessoa["Lovelace"] = "Lovelace";
    EnumPessoa["Turing"] = "Turing";
    EnumPessoa["Tesla"] = "Tesla";
    EnumPessoa["Copernico"] = "Copernico";
})(EnumPessoa || (EnumPessoa = {}));
export class Pessoa {
    constructor(id, name, bio) {
        this.id = id;
        this.name = name;
        this.bio = bio;
        this.invencoes = [];
    }
    get pega_invencoes() {
        return this.invencoes;
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
    set troca_id(id) {
        this.id = id;
    }
    adiciona_invencoes(invencao) {
        this.invencoes.push(invencao);
    }
}
//# sourceMappingURL=person.js.map