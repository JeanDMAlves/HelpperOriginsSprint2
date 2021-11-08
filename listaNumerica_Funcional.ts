class ListaNumericaFuncional{
    private lista: Array<number>
    public verifica_lista: boolean
    private mensagem_erro: string

    constructor(lista: Array<number>){
        this.lista = lista
        this.verifica_lista = !(lista.filter((item:number) => {return isNaN(item)}).length > 0)
        this.mensagem_erro = 'Lista não é inteiramente numérica'
    }

    public maior_valor(): number|string{
        if(this.verifica_lista) return this.lista.reduce((a,b) => {return Math.max(a,b)})
        else return this.mensagem_erro
    }
    
    public menor_valor(): number|string{
        if(this.verifica_lista) return this.lista.reduce((a,b) => {return Math.min(a,b)})
        else return this.mensagem_erro
    }

    public valor_medio(): number|string{
        if(this.verifica_lista){
            const soma_numeros = (a: number, b: number): number => {return a+b}
            return (this.lista.reduce(soma_numeros, 0)) / (this.lista.length) 
        }
        else return this.mensagem_erro
    }

    public valores_relevantes(){
        if(this.verifica_lista) return [this.menor_valor(), this.valor_medio(), this.maior_valor()]
        else return this.mensagem_erro
    }

    public get pega_lista(): Array<number>{
        return this.lista
    }

}

// Teste do método 

// let numeros = new ListaNumericaFuncional([0,2,3,5,1,4,8,6,7,10,9])
// console.log(numeros.valores_relevantes())