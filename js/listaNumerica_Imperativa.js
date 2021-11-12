class ImperativeNumericList {
    constructor(list) {
        list.sort(this.sortList);
        this.list = list;
        this.errorMessage = 'lista não é inteiramente numérica';
    }
    sortList(a, b) {
        if (a > b)
            return 1;
        else if (a < b)
            return -1;
        return 0;
    }
    verifyList() {
        for (let item of this.list) {
            if (isNaN(item))
                return this.errorMessage;
        }
    }
    highestValue() {
        if (this.verifyList() !== this.errorMessage)
            return this.list[this.list.length - 1];
        else
            return this.errorMessage;
    }
    lowestValue() {
        if (this.verifyList() !== this.errorMessage)
            return this.list[0];
        else
            return this.errorMessage;
    }
    averageValue() {
        if (this.verifyList() !== this.errorMessage) {
            let accumulator = 0;
            for (let i = 0; i < this.list.length; i++) {
                accumulator += this.list[i];
            }
            return (accumulator / (this.list.length));
        }
        else
            return this.errorMessage;
    }
    importantValues() {
        if (this.verifyList() !== this.errorMessage)
            return [this.lowestValue(), this.averageValue(), this.highestValue()];
    }
}
//# sourceMappingURL=listaNumerica_Imperativa.js.map