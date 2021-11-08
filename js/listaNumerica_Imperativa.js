class ListaNumericaImperativa {
    constructor(lista) {
        lista.sort(this.ordena_lista);
        this.lista = lista;
        this.mensagem_erro = 'Lista não é inteiramente numérica';
    }
    ordena_lista(a, b) {
        if (a > b)
            return 1;
        else if (a < b)
            return -1;
        return 0;
    }
    verifica_lista() {
        for (let item of this.lista) {
            if (isNaN(item))
                return this.mensagem_erro;
        }
    }
    maior_valor() {
        if (this.verifica_lista() !== this.mensagem_erro)
            return this.lista[this.lista.length - 1];
        else
            return this.mensagem_erro;
    }
    menor_valor() {
        if (this.verifica_lista() !== this.mensagem_erro)
            return this.lista[0];
        else
            return this.mensagem_erro;
    }
    valor_medio() {
        if (this.verifica_lista() !== this.mensagem_erro) {
            let acumulador = 0;
            for (let i = 0; i < this.lista.length; i++) {
                acumulador += this.lista[i];
            }
            return (acumulador / (this.lista.length));
        }
        else
            return this.mensagem_erro;
    }
    valores_relevantes() {
        if (this.verifica_lista() !== this.mensagem_erro)
            return [this.menor_valor(), this.valor_medio(), this.maior_valor()];
    }
}
//# sourceMappingURL=listaNumerica_Imperativa.js.map