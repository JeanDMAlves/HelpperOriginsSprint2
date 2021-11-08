class ListaNumericaFuncional {
    constructor(lista) {
        this.lista = lista;
        this.verifica_lista = !(lista.filter((item) => { return isNaN(item); }).length > 0);
        this.mensagem_erro = 'Lista não é inteiramente numérica';
    }
    maior_valor() {
        if (this.verifica_lista)
            return this.lista.reduce((a, b) => { return Math.max(a, b); });
        else
            return this.mensagem_erro;
    }
    menor_valor() {
        if (this.verifica_lista)
            return this.lista.reduce((a, b) => { return Math.min(a, b); });
        else
            return this.mensagem_erro;
    }
    valor_medio() {
        if (this.verifica_lista) {
            const soma_numeros = (a, b) => { return a + b; };
            return (this.lista.reduce(soma_numeros, 0)) / (this.lista.length);
        }
        else
            return this.mensagem_erro;
    }
    valores_relevantes() {
        if (this.verifica_lista)
            return [this.menor_valor(), this.valor_medio(), this.maior_valor()];
        else
            return this.mensagem_erro;
    }
    get pega_lista() {
        return this.lista;
    }
}
// Teste do método 
// let numeros = new ListaNumericaFuncional([0,2,3,5,1,4,8,6,7,10,9])
// console.log(numeros.valores_relevantes())
//# sourceMappingURL=listaNumerica_Funcional.js.map