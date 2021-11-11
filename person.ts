export enum EnumPerson{
    Lovelace = 'Lovelace',
    Turing = 'Turing',
    Tesla = 'Tesla',
    Copernico = 'Copernico'
}

export abstract class Person {

    private id: number;
    private name: string;
    private bio: string;
    private inventions: Array<string>;

    constructor(id?: number, name?: string, bio?: string){
        this.id = id;
        this.name = name;
        this.bio = bio;
        this.inventions = [];
    }

    public get getInventions(): Array<string>{
        return this.inventions;
    }

    public get getId(): number{
        return this.id;
    }

    public get getBio(): string{
        return this.bio;
    }
    
    public get getName(): string{
        return this.name;
    }
    
    public set updateBio(changes: string){
        this.bio = changes;
    }

    public set updateName(changes: string){
        this.name = changes;
    }

    public set updateId(id: number){
        this.id = id;
    }

    public addInventions(invention: string){
        this.inventions.push(invention)
    }
}