class FunctionalNumericList {
    constructor(list) {
        this.list = list;
        this.verifyList = !(list.filter((item) => { return isNaN(item); }).length > 0);
        this.errorMessage = 'lista não é inteiramente numérica';
    }
    highestValue() {
        if (this.verifyList)
            return this.list.reduce((a, b) => { return Math.max(a, b); });
        else
            return this.errorMessage;
    }
    lowestValue() {
        if (this.verifyList)
            return this.list.reduce((a, b) => { return Math.min(a, b); });
        else
            return this.errorMessage;
    }
    averageValue() {
        if (this.verifyList) {
            const addNumbers = (a, b) => { return a + b; };
            return (this.list.reduce(addNumbers, 0)) / (this.list.length);
        }
        else
            return this.errorMessage;
    }
    importantValues() {
        if (this.verifyList)
            return [this.lowestValue(), this.averageValue(), this.highestValue()];
        else
            return this.errorMessage;
    }
    get getList() {
        return this.list;
    }
}
// Teste do método 
// let numeros = new FunctionalNumericList([0,2,3,5,1,4,8,6,7,10,9])
// console.log(numeros.importantValues())
//# sourceMappingURL=listaNumerica_Funcional.js.map