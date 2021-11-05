class ContaVogais {
    constructor(palavra) {
        this.palavra = palavra;
    }
    verifica_vogais(letra) {
        let listaVogais = ['a', 'e', 'i', 'o', 'u', "á", "ã", "à", "â", "é", "ê", "è", "í", "ì", "î", "ó", "ò", "õ", "ô", "ú", "û", "ù"];
        return listaVogais.includes(letra);
    }
    qtd_vogais() {
        let lista_letras = this.palavra.toString().toLowerCase().split('');
        return lista_letras.filter(this.verifica_vogais).length;
    }
}
// Letra A
let letra_A = document.getElementById('formulario_A_saida');
let frase_A = document.getElementById('frase_A');
let retorno_A = new ContaVogais(frase_A.innerHTML.toString());
letra_A.value = retorno_A.qtd_vogais().toString();
//letra B
let letra_B = document.getElementById('botao_vogais');
letra_B.addEventListener("click", (event) => {
    event.preventDefault();
    let palavra_entrada = document.getElementById("formulario_B_entrada");
    let numero_vogais_b = document.getElementById("formulario_B_saida");
    let retorno_B = new ContaVogais(palavra_entrada.value);
    numero_vogais_b.value = retorno_B.qtd_vogais().toString();
});
//# sourceMappingURL=ContaVogais.js.map