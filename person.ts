export enum EnumPessoa{
    Lovelace = 'Lovelace',
    Turing = 'Turing',
    Tesla = 'Tesla',
    Copernico = 'Copernico'
}

export abstract class Pessoa {

    private id: number
    private name: string
    private bio: string
    private invencoes: Array<string>

    constructor(id?: number, name?: string, bio?: string){
        this.id = id
        this.name = name
        this.bio = bio
        this.invencoes = []
    }

    public get pega_invencoes(): Array<string>{
        return this.invencoes
    }

    public get pega_id(): number{
        return this.id
    }

    public get pega_bio(): string{
        return this.bio
    }
    
    public get pega_name(): string{
        return this.name
    }
    
    public set troca_bio(bio_trocada: string){
        this.bio = bio_trocada
    }

    public set troca_name(name_trocado: string){
        this.name = name_trocado
    }

    public set troca_id(id: number){
        this.id = id
    }

    public adiciona_invencoes(invencao: string){
        this.invencoes.push(invencao)
    }
}