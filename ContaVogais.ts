class ContaVogais{
    
    private palavra: string
    
    constructor(palavra: string){
        this.palavra = palavra
    }

    private verifica_vogais(letra:string):boolean{
        let listaVogais: Array<string> = ['a','e','i','o','u', "á", "ã", "à", "â", "é", "ê", "è", "í", "ì", "î", "ó", "ò", "õ", "ô", "ú", "û", "ù"]
    
        return listaVogais.includes(letra)
    }

    public qtd_vogais():number{
        let lista_letras = this.palavra.toString().toLowerCase().split('')
        return lista_letras.filter(this.verifica_vogais).length
    } 
}

// Letra A
let letra_A: HTMLInputElement = document.getElementById('formulario_A_saida') as HTMLInputElement
let frase_A: HTMLInputElement = document.getElementById('frase_A') as HTMLInputElement
let retorno_A = new ContaVogais(frase_A.innerHTML.toString()) 

letra_A.value = retorno_A.qtd_vogais().toString()

//letra B
let letra_B = document.getElementById('botao_vogais')

letra_B.addEventListener("click", (event) => {
    event.preventDefault()

    let palavra_entrada: HTMLInputElement = document.getElementById("formulario_B_entrada") as HTMLInputElement
    let numero_vogais_b: HTMLInputElement = document.getElementById("formulario_B_saida") as HTMLInputElement
    let retorno_B = new ContaVogais(palavra_entrada.value)


    numero_vogais_b.value = retorno_B.qtd_vogais().toString()

})