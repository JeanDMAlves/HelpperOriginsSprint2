class ContaVogais {
    constructor(palavra) {
        this.palavra = palavra;
    }
    qtd_vogais() {
        return this.palavra.match(/[aeiouáãàâéêèíìîóòõôúûù]/gi).length;
    }
}
// Letra A
const letra_A = document.getElementById("formulario_A_saida");
const frase_A = document.getElementById("frase_A");
const retorno_A = new ContaVogais(frase_A.innerHTML.toString());
letra_A.value = retorno_A.qtd_vogais().toString();
//letra B
const letra_B = document.getElementById("botao_vogais");
letra_B.addEventListener("click", (event) => {
    event.preventDefault();
    const palavra_entrada = document.getElementById("formulario_B_entrada");
    const numero_vogais_b = document.getElementById("formulario_B_saida");
    const retorno_B = new ContaVogais(palavra_entrada.value);
    numero_vogais_b.value = retorno_B.qtd_vogais().toString();
});
//# sourceMappingURL=ContaVogais.js.map