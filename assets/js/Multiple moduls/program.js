function Program(date) {
    this.date = date;
    this.list = [];
    this.number = 0;
}

Program.prototype.addMovie = function (movie) {
    this.list.push(movie);
    this.number++;
};

Program.prototype.getData = function () {
    var programLength = 0;
    var z = '';

    for (var i = 0; i < this.list.length; i++) {

        programLength = programLength + this.list[i].movieLength;
    }

    for (var i = 0; i < this.list.length; i++) {

        z = z + this.list[i].getData() + '\n';
    }
    // console.log(z)
    return this.date + ', ' + programLength + 'min' + '\n' + z;
}


module.exports = { Program};