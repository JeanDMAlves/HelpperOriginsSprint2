class ImperativeNumericList{
    private list: Array<number>;
    private errorMessage: string;

    constructor(list: Array<number>){
        list.sort(this.sortList);
        this.list = list;
        this.errorMessage = 'lista não é inteiramente numérica';
    }  

    private sortList(a: number, b: number): number{
        if (a>b) return 1;
        else if (a<b) return -1;
        return 0;
    }

    private verifyList(): string{
        for(let item of this.list){
            if(isNaN(item)) return this.errorMessage;
        }
    }

    public highestValue(): number|string{
        if(this.verifyList() !== this.errorMessage) return this.list[this.list.length -1];
        else return this.errorMessage;
    }

    public lowestValue(): number|string{
        if(this.verifyList() !== this.errorMessage) return this.list[0];
        else return this.errorMessage;
    }

    public averageValue(): number|string{
        if(this.verifyList() !== this.errorMessage){
            let accumulator: number = 0;
            for(let i = 0; i < this.list.length; i++){
                accumulator += this.list[i];
            }
            return (accumulator/(this.list.length));
        }
        else return this.errorMessage;
    }

    public importantValues():[number|string, number|string, number|string]{
        if(this.verifyList() !== this.errorMessage) return [this.lowestValue(), this.averageValue(), this.highestValue()];
    }
}
