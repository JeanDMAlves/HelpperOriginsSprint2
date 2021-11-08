class ListaNumericaImperativa{
    private lista: Array<number>
    private mensagem_erro: string

    constructor(lista: Array<number>){
        lista.sort(this.ordena_lista)
        this.lista = lista
        this.mensagem_erro = 'Lista não é inteiramente numérica'
    }  

    private ordena_lista(a: number, b: number): number{
        if (a>b) return 1
        else if (a<b) return -1
        return 0
    }

    private verifica_lista(): string{
        for(let item of this.lista){
            if(isNaN(item)) return this.mensagem_erro
        }
    }

    public maior_valor(): number|string{
        if(this.verifica_lista() !== this.mensagem_erro) return this.lista[this.lista.length -1]
        else return this.mensagem_erro
    }

    public menor_valor(): number|string{
        if(this.verifica_lista() !== this.mensagem_erro) return this.lista[0]
        else return this.mensagem_erro
    }

    public valor_medio(): number|string{
        if(this.verifica_lista() !== this.mensagem_erro){
            let acumulador: number = 0
            for(let i = 0; i < this.lista.length; i++){
                acumulador += this.lista[i]
            }
            return (acumulador/(this.lista.length))
        }
        else return this.mensagem_erro
    }

    public valores_relevantes():[number|string, number|string, number|string]{
        if(this.verifica_lista() !== this.mensagem_erro) return [this.menor_valor(), this.valor_medio(), this.maior_valor()]
    }
}