class FunctionalNumericList{
    private list: Array<number>;
    public verifyList: boolean;
    private errorMessage: string;

    constructor(list: Array<number>){
        this.list = list;
        this.verifyList = !(list.filter((item:number) => {return isNaN(item)}).length > 0);
        this.errorMessage = 'lista não é inteiramente numérica';
    }

    public highestValue(): number|string{
        if(this.verifyList) return this.list.reduce((a,b) => {return Math.max(a,b)});
        else return this.errorMessage;
    }
    
    public lowestValue(): number|string{
        if(this.verifyList) return this.list.reduce((a,b) => {return Math.min(a,b)});
        else return this.errorMessage;
    }

    public averageValue(): number|string{
        if(this.verifyList){
            const addNumbers = (a: number, b: number): number => {return a+b};
            return (this.list.reduce(addNumbers, 0)) / (this.list.length);
        }
        else return this.errorMessage;
    }

    public importantValues(){
        if(this.verifyList){ 
            console.log(`O menor valor é: ${this.lowestValue()}, o valor médio é: ${this.averageValue()}, o maior valor é: ${this.highestValue()}`)
        }
        else return this.errorMessage;
    }
}

// Testes
// let numeros = new FunctionalNumericList([0,2,3,5,1,4,8,6,7,10,9])
// numeros.importantValues()
