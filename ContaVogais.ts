class ContaVogais{
    
    private palavra: string
    
    constructor(palavra: string){
        this.palavra = palavra
    }

    public qtd_vogais():number{
        return this.palavra.match(/[aeiouáãàâéêèíìîóòõôúûù]/gi).length
    } 
}

// Letra A
const letra_A: HTMLInputElement = document.getElementById("formulario_A_saida") as HTMLInputElement
const frase_A: HTMLInputElement = document.getElementById("frase_A") as HTMLInputElement
const retorno_A = new ContaVogais(frase_A.innerHTML.toString()) 

letra_A.value = retorno_A.qtd_vogais().toString()

//letra B
const letra_B = document.getElementById("botao_vogais")

letra_B.addEventListener("click", (event) => {
    event.preventDefault()

    const palavra_entrada: HTMLInputElement = document.getElementById("formulario_B_entrada") as HTMLInputElement
    const numero_vogais_b: HTMLInputElement = document.getElementById("formulario_B_saida") as HTMLInputElement
    const retorno_B = new ContaVogais(palavra_entrada.value)

    numero_vogais_b.value = retorno_B.qtd_vogais().toString()
})
