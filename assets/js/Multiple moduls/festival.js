function Festival(name) {
    this.name = name;
    this.list = [];
    this.number = 0;
}

Festival.prototype.addProgram = function (program) {
    this.list.push(program);
    this.number++;
};

Festival.prototype.getData = function () {
    var sumMov = 0;
    var sumProgData = '';
    for (var i = 0; i < this.list.length; i++) {
        sumMov = sumMov + this.list[i].number;
        sumProgData = sumProgData + this.list[i].getData() + '\n';
    }

    return this.name + ' has ' + sumMov + ' movie titles' + '\n' + sumProgData

}


module.exports = {Festival};