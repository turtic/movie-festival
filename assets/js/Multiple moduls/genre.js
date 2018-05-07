function Genre(name) {

    this.name = name;
}

Genre.prototype.getData = function () {
    var a = this.name[0] + this.name[this.name.length - 1];
    return a.toUpperCase(this.name);
}

module.exports = { Genre};